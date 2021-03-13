import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
 @Input() transactions: any[] | undefined;
  constructor() { }

  ngOnInit(): void {
    if(this.transactions !== undefined && this.transactions[0]?.signature) {
      console.log(this.transactions[0].isValid());
    }
  }

}
