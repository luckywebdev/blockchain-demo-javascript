import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../shared/service/blockchain.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public blockchain: any;
  settingsForm: FormGroup;
  
  constructor(
    private blockchainService: BlockchainService,
    private fb: FormBuilder,
    private messageService: MessageService,
  ) {
    this.blockchain = this.blockchainService.blockchainInstance;
    console.log(this.blockchain);
   }

  ngOnInit(): void {
    this.initForm();
    this.settingsForm?.patchValue({
      difficulty: this.blockchain.difficulty,
      miningReward: this.blockchain.miningReward
    });
  }

  initForm(): void {
    this.settingsForm = this.fb.group({
      difficulty: [1, Validators.required],
      miningReward: [0, Validators.required]
    })
  }

  settingsData(): void {
    this.blockchain.difficulty = this.settingsForm.controls.difficulty.value;
    this.blockchain.miningReward = this.settingsForm.controls.miningReward.value;
    this.messageService.add({severity:'success', summary:'Setting difficulty and mining reward of blockchain successfully!', detail:''});
  }

}
