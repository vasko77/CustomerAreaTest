import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AppUserAuth } from '../models/app-user-auth';
import { HttpClient } from '@angular/common/http';
import { IAdb2cResponse } from '../models/adb2c-response';
import { tap, map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  autheticatedUser: AppUserAuth = new AppUserAuth();

  constructor(private http: HttpClient) { }

  login(user: AppUser): Observable<AppUserAuth> {

    this.resetAuthenticationUser();

    // tslint:disable-next-line:max-line-length
    const url = `https://nettestna.eurolife.gr/CAVasko/api/login/GetToken?UserName=${user.userName}&password=${user.password}`;

    return this.http.get<IAdb2cResponse>(url).pipe(
      map(resp => {
        this.autheticatedUser.userName = user.userName;
        this.autheticatedUser.bearerToken = resp.access_token;
        this.autheticatedUser.refreshToken = resp.refresh_token;
        this.autheticatedUser.expriresIn = resp.expires_in;
        this.autheticatedUser.isAuthenticated = resp.access_token ? true : false;
        return this.autheticatedUser;
      }
      ));

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
