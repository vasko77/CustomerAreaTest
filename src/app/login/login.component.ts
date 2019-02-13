import { Component, OnInit } from '@angular/core';
import { AppUser } from '../core/models/app-user';
import { AppUserAuth } from '../core/models/app-user-auth';
import { AuthenticationService } from '../core/services/authentication.service';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: AppUser = new AppUser();
  userAuth: AppUserAuth = null;

  returnUrl: string;

  btnOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Login',
    spinnerSize: 20,
    raised: true,
    stroked: true,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              private message: MatSnackBar) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

  login(): void {
    this.btnOpts.active = true;
    this.authenticationService.login(this.user).subscribe(
      resp => {
        this.userAuth = resp;
        if (!this.userAuth.isAuthenticated) {
          this.message.open( 'Λάθος username ή password', 'X', { duration: 5000 });
        }
        this.btnOpts.active = false;
        if ( this.returnUrl ) {
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.router.navigateByUrl('/home');
        }
      },
      error => {
        this.btnOpts.active = false;
        this.message.open( 'Αδύνατο Login', 'X', { duration: 5000 });
      }
    );
  }

}
