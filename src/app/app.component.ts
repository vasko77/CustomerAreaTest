import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { filter, take } from 'rxjs/operators';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  // constructor(private authService: AuthService) {}
  constructor(public oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.getIsModuleSetup().pipe(
      filter((isModuleSetup: boolean) => isModuleSetup),
      take(1)
    ).subscribe((isModuleSetup: boolean) => {
      this.doCallbackLogicIfRequired();
    });
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  logout(): void {
    this.oidcSecurityService.logoff();
  }

  private doCallbackLogicIfRequired() {
    if (window.location.hash) {
        this.oidcSecurityService.authorizedImplicitFlowCallback();
    }
  }
}


