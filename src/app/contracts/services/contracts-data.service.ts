import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IContract } from '../models/contract';
import { Observable } from 'rxjs';
import { IContractsResponse } from '../models/contracts-response';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Injectable()
export class ContractsDataService {

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  getActiveContracts(): Observable<IContractsResponse> {
    const url = 'https://esbtestna.eurolife.gr/CustomerDataProvider/api/CustomerData/GetCustomerContracts';

    const httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authenticationService.autheticatedUser.bearerToken
    }) };

    return this.http.post<IContractsResponse>( url, null, httpOptions );

  }
}
