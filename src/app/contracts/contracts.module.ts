import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ActiveContractsComponent } from './active-contracts/active-contracts.component';
import { ContractsDataService } from './services/contracts-data.service';
import { ContractInfoComponent } from './contract-info/contract-info.component';

@NgModule({
  declarations: [
    ActiveContractsComponent,
    ContractInfoComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule
  ],
  providers: [
    ContractsDataService
  ]
})
export class ContractsModule { }
