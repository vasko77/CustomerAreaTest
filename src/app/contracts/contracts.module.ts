import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ActiveContractsComponent } from './active-contracts/active-contracts.component';
import { ContractsDataService } from './services/contracts-data.service';

@NgModule({
  declarations: [ActiveContractsComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule
  ],
  providers: [
    ContractsDataService
  ]
})
export class ContractsModule { }
