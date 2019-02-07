import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AppUserAuth } from '../models/app-user-auth';
import { HttpClient } from '@angular/common/http';
import { IAdb2cResponse } from '../models/adb2c-response';


@Injectable({providedIn: 'root'})
export class AuthenticationService {

  autheticatedUser: AppUserAuth = new AppUserAuth();

  constructor(private http: HttpClient) { }

  login( user: AppUser ): Observable<AppUserAuth> {

    this.resetAuthenticationUser();

    // tslint:disable-next-line:max-line-length
    const url = `https://login.microsoftonline.com/eurob2c.onmicrosoft.com/oauth2/v2.0/token?p=B2C_1_resource-owner&grant_type=password&client_id=668f01f7-aa44-41b0-9d99-4d7517c44296&username=vtsionis@hotmail.com&password=erbtest5%&scope=https://eurob2c.onmicrosoft.com/tasks/read https://eurob2c.onmicrosoft.com/tasks/write offline_access`;

    this.http.post( url, null ).subscribe(
      (resp: IAdb2cResponse) => {
        this.autheticatedUser.userName = user.userName;
        this.autheticatedUser.isAuthenticated = true;
        this.autheticatedUser.bearerToken = resp.access_token;
      }
    );

    Object.assign( this.autheticatedUser, {} );

    if (this.autheticatedUser.userName !== '') {
      localStorage.setItem('bearerToken', this.autheticatedUser.bearerToken);
    }

    return of<AppUserAuth>( this.autheticatedUser );

  }

  logout(): void {

    this.resetAuthenticationUser();

  }

  private resetAuthenticationUser(): void {
    this.autheticatedUser.userName = '';
    this.autheticatedUser.bearerToken = '';
    this.autheticatedUser.isAuthenticated = false;

    localStorage.removeItem('bearerToken');
  }
}
