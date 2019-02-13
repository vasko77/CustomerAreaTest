import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveContractsComponent } from './contracts/active-contracts/active-contracts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/services/auth-guard.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'active-contracts', canActivate: [AuthGuard], component: ActiveContractsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
