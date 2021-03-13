import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/modules/shared/service/blockchain.service';

@Component({
  selector: 'app-pending-transaction',
  templateUrl: './pending-transaction.component.html',
  styleUrls: ['./pending-transaction.component.scss']
})
export class PendingTransactionComponent implements OnInit {

  public pendingTransactions: any[];

  constructor(
    private blockchainService: BlockchainService
  ) {
    this.pendingTransactions = this.blockchainService.getPendingTransactions();
   }

  ngOnInit(): void {
  }

  minePendingTransactions() {
    this.blockchainService.minePendingTransactions();
  }
}
