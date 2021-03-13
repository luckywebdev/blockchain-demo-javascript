import { timeStamp } from 'console';
import { SHA256 } from 'crypto-js';
import { ec } from 'elliptic';

export class Transaction 
{
  fromAddress: string;
  toAddress: string;
  amount: number;
  signature: any;
  timestamp: number;

  constructor(fromAddress: string, toAddress: string, amount: number, timestamp: number) 
  {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = timestamp;

  }

  calculateHash() {
    return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
  }

  signTransaction(signingKey: any) {
    if(signingKey.getPublic('hex') !== this.fromAddress) {
      throw new Error('You cannot sign transactions for other wallets!');
    }
    const hashTx = this.calculateHash();
    const sig = signingKey.sign(hashTx, 'base64');
    this.signature = sig.toDER('hex');
  }

  isValid() {
    const EC = new ec('secp256k1');

    if(this.fromAddress === "") return true;
    if(!this.signature || this.signature.length === 0) {
      throw new Error('No signature in this transaction');
    }

    const publicKey = EC.keyFromPublic(this.fromAddress, 'hex');
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}
