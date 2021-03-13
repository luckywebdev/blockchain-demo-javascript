import { Component, OnInit } from '@angular/core';
import { Blockchain } from 'src/app/modules/shared/blockchain-module/blockchin.module';
import { Transaction } from 'src/app/modules/shared/blockchain-module/transaction.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { BlockchainService } from 'src/app/modules/shared/service/blockchain.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {

  public newTx: any;
  public walletKey: any;
  transactionForm: FormGroup;

  constructor(
    private blockchainService: BlockchainService,
    private fb: FormBuilder,
    private messageService: MessageService,
  ) {
    this.walletKey = this.blockchainService.walletKeys[0];
   }

  ngOnInit(): void {
    this.initForm();
    this.transactionForm.patchValue({
      publicKey: this.walletKey.publicKey
    })
    // this.newTx = new Transaction();
  }

  initForm(): void {
    this.transactionForm = this.fb.group({
      publicKey: ["", Validators.required],
      toAddress: ["", Validators.required],
      amount: [0, Validators.required]
    })
  }

  createTransaction(): void {
    let d = new Date();
    this.newTx = new Transaction(this.walletKey.publicKey, this.transactionForm.controls.toAddress.value, this.transactionForm.controls.amount.value, d.getTime());
    this.newTx.signTransaction(this.walletKey.keyObj);
    console.log(this.newTx);
    this.blockchainService.addTransaction(this.newTx);
    this.messageService.add({severity:'success', summary:'Add transaction successfully!', detail:''});
  }

}
