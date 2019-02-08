import { Injectable } from '@angular/core';
import { UserManager, User, UserManagerSettings , WebStorageStateStore } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userManager: UserManager;
  private user: User;

  constructor() {
    const config: UserManagerSettings = {
      authority: 'https://login.microsoftonline.com/',
      client_id: 'd35c8bf9-ef9b-48b1-b6b4-c6b40f0a5c25',
      redirect_uri: 'http://localhost:4200/',
      scope: 'openid profile',
      response_type: 'id_token',
      post_logout_redirect_uri: 'http://localhost:4200/',
      userStore: new WebStorageStateStore( { store: window.localStorage }),
      metadata: {
        authorization_endpoint: 'https://login.microsoftonline.com/VaskoTestActiveDir.onmicrosoft.com/oauth2/authorize',
        issuer: 'https://login.microsoftonline.com/VaskoTestActiveDir.onmicrosoft.com',
        userinfo_endpoint: 'https://login.microsoftonline.com/VaskoTestActiveDir.onmicrosoft.com/openid/userinfo',
        jwks_uri: 'https://login.microsoftonline.com/common/discovery/keys',
        end_session_endpoint: 'https://login.microsoftonline.com/v2/logout?returnTo=http://localhost:4200/?postLogout=true'
      }
    };

    this.userManager = new UserManager(config);

    this.userManager.getUser().then(user => {
      if (user && !user.expired) {
        this.user = user;
        console.log(this.user);
        console.log(this.user.access_token);
      }
    }).catch((err) => console.error(err));
  }

  login(): Promise<any> {
    return this.userManager.signinRedirect();
  }

  logout(): Promise<any> {
    return this.userManager.signoutRedirect();
  }

  isLoggedIn(): boolean {
    return this.user && this.user.access_token && !this.user.expired;
  }

  getAccessToken(): string {
    if (this.isLoggedIn()) {
      return this.user.access_token;
    }
  }
}
