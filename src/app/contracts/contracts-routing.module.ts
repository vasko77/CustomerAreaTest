import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveContractsComponent } from './active-contracts/active-contracts.component';

const routes: Routes = [
  { path: 'active-contracts', component: ActiveContractsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
