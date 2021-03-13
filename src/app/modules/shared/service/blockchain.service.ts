import { Injectable } from '@angular/core';
import { Blockchain } from '../blockchain-module/blockchin.module';
import { ec } from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
public blockchainInstance = new Blockchain();
public walletKeys: any[] = [];
EC = new ec('secp256k1');

  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');

    this.generateWalletKeys();

  }

  getBlocks() {
    return this.blockchainInstance.chain;
  }

  addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }

  private generateWalletKeys() {
    const key = this.EC.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    });
  }
}
