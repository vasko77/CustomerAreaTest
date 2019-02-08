import { Component, OnInit } from '@angular/core';
import { AppUser } from '../core/models/app-user';
import { AppUserAuth } from '../core/models/app-user-auth';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: AppUser = new AppUser();
  userAuth: AppUserAuth = null;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login(): void {
    this.authenticationService.login(this.user).subscribe(
      resp => this.userAuth = resp
    );
  }

}
