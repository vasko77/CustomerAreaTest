import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveContractsComponent } from './contracts/active-contracts/active-contracts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'active-contracts', component: ActiveContractsComponent },
  { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
