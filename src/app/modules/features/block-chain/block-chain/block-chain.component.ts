import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/modules/shared/service/blockchain.service';
import { Block } from '../../../shared/model';

@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.scss']
})
export class BlockChainComponent implements OnInit {
  public blocks: Block[]= [];
  public selectedBlock: Block;

  constructor(
    private blockchainService: BlockchainService
  ) {
    this.blocks = this.blockchainService.getBlocks();
    this.selectedBlock = this.blocks[0];
   }

  ngOnInit(): void {
  }

  showTransactions(block: Block) {
    this.selectedBlock = block;
  }
}
