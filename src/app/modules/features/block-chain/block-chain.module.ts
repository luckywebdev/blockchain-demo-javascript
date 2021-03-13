import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Route, Routes, RouterModule } from '@angular/router';
import { BlockChainComponent } from './block-chain/block-chain.component';
import { BlockViewerComponent } from './block-viewer/block-viewer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  component: BlockChainComponent},
];

@NgModule({
  declarations: [BlockViewerComponent, BlockChainComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class BlockChainModule { }
