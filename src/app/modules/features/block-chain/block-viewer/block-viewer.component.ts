import { Component, Input, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/modules/shared/service/blockchain.service';
import { Block } from '../../../shared/model';

@Component({
  selector: 'app-block-viewer',
  templateUrl: './block-viewer.component.html',
  styleUrls: ['./block-viewer.component.scss']
})
export class BlockViewerComponent implements OnInit {
  @Input() block: Block | undefined;

  constructor(
    private blockchainService: BlockchainService
  ) { 

  }

  ngOnInit(): void {
  }

}
