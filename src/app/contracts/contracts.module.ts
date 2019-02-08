import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ActiveContractsComponent } from './active-contracts/active-contracts.component';
import { ContractsDataService } from './services/contracts-data.service';
import { ContractInfoComponent } from './contract-info/contract-info.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    ActiveContractsComponent,
    ContractInfoComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    MaterialModule
  ],
  providers: [
    ContractsDataService
  ]
})
export class ContractsModule { }
