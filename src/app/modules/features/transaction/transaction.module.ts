import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { PendingTransactionComponent } from './pending-transaction/pending-transaction.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  component: AddTransactionComponent},
  { path: 'pending',  pathMatch: 'full', component: PendingTransactionComponent},
];
@NgModule({
  declarations: [AddTransactionComponent, PendingTransactionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TransactionModule { }
