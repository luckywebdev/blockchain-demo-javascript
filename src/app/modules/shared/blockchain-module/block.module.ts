import { SHA256 } from 'crypto-js';
import { ec } from 'elliptic';
// const ec = new EC('secp256k1');

export class Block 
{
  previousHash: string; 
  timestamp: number;
  transactions: any;
  hash: string;
  nonce: number;

  constructor(timestamp: number, transaction: any, previousHash = '') 
  { 
    this.previousHash = previousHash; 
    this.timestamp = timestamp; 
    this.transactions = transaction; 
    this.hash = this.calculateHash(); 
    this.nonce = 0;
  } 

  calculateHash() 
  { 
    return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString(); 
  } 

  mineBlock(difficulty: number) {
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block mined: ", this.hash); 
  }

  hasValidTransactions() {
    for (const tx of this.transactions) {
      if(!tx.isValid()) {
        return false;
      }
    }
    return true; 
  }
}

