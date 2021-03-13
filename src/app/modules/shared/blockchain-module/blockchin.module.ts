import { SHA256 } from 'crypto-js';
import { ec } from 'elliptic';
import { Block } from './block.module';
import { Transaction } from './transaction.module';

export class Blockchain
{
  chain: Block[];
  difficulty: number;
  pendingTransactions: Transaction[];
  miningReward: number;
  //Section 1 Genesis block creation
  constructor()
  { 
    this.chain = [this.createGenesisBlock()]; 
    this.difficulty = 5;
    this.pendingTransactions = [];
    this.miningReward = 100;
  } 

  createGenesisBlock() 
  {
    let d = new Date("02/28/2017");
    return new Block(d.getTime(), [], "0"); 
  } 

  //section 2 adding new blocks
  getLatestBlock() 
  { 
    return this.chain[this.chain.length - 1]; 
  } 

  minePendingTransactions(miningRewardAddress: string) 
  {
    let d = new Date();
    const rewardTx = new Transaction("", miningRewardAddress, this.miningReward, d.getTime());
   
    this.pendingTransactions.push(rewardTx);

    let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
    block.mineBlock(this.difficulty);

    console.log('Block successfully mined!');
    this.chain.push(block);

    this.pendingTransactions = [];
  }

  addTransaction(transaction: Transaction) {
    if(!transaction.fromAddress || !transaction.toAddress) {
      throw new Error('Transaction must include from and to address');
    }

    if(!transaction.isValid()) {
      throw new Error('Cannot add invalid transaction to chain');
    }

    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address: string) {
    let balance = 0;

    for(const block of this.chain) {
      console.log("block==>", block.transactions);
      for(const trans of block.transactions) {
        if(trans.fromAddress === address) {
          balance -= trans.amount;
        }
        if(trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }
    return balance;
  }

  //section 3 validating the chain
  isChainValid() 
  { 
    for (let i = 1; i < this.chain.length; i++)
    { 
      const currentBlock = this.chain[i]; 
      const previousBlock = this.chain[i - 1]; 
      if(!currentBlock.hasValidTransactions()) {
        return false;
      }

      if (currentBlock.hash !== currentBlock.calculateHash()) { 
        return false; 
      } 

      if (currentBlock.previousHash !== previousBlock.hash) 
      { 
        return false; 
      } 
    } 
    return true; 
  } 


}
