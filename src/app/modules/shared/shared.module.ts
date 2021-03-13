import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import { TransactionComponent } from './components/transaction/transaction.component';

@NgModule({
  declarations: [HeaderComponent, TransactionComponent],
  imports: [
    CommonModule,
    RouterModule,
    MessageModule,
    MessagesModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    MessageModule,
    MessagesModule,
    TransactionComponent
  ],
  providers: [MessageService]
})
export class SharedModule { }
