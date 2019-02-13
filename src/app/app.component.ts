import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';
import { AppUserAuth } from './core/models/app-user-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  userAuth: AppUserAuth = null;

  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  // constructor(private authService: AuthService) {}
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    this.userAuth = authenticationService.autheticatedUser;
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}


