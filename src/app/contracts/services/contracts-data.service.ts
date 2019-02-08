import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IContract } from '../models/contract';
import { Observable } from 'rxjs';
import { IContractsResponse } from '../models/contracts-response';

@Injectable()
export class ContractsDataService {

  constructor(private http: HttpClient) { }

  getActiveContracts(): Observable<IContractsResponse> {
    const url = 'https://esbtestna.eurolife.gr/CustomerDataProvider/api/CustomerData/GetCustomerContracts';

    const httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // tslint:disable-next-line:max-line-length
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vNDU2NWE0ZDItYzFkNS00N2M2LTgxNzMtNDZhZTYwZDhmMTgzL3YyLjAvIiwiZXhwIjoxNTQ5NTg0NDM2LCJuYmYiOjE1NDk1ODA4MzYsImF1ZCI6IjY2OGYwMWY3LWFhNDQtNDFiMC05ZDk5LTRkNzUxN2M0NDI5NiIsImlkcCI6IkxvY2FsQWNjb3VudCIsIm9pZCI6ImNiNGIzZTgyLTgzOGQtNDE4Ni1iNzAyLTk0MzQ3M2Q3MjMxMCIsInN1YiI6ImNiNGIzZTgyLTgzOGQtNDE4Ni1iNzAyLTk0MzQ3M2Q3MjMxMCIsImdpdmVuX25hbWUiOiJJcm9uTWFuMiIsImZhbWlseV9uYW1lIjoiU3RhcmsiLCJuYW1lIjoiSXJvbk1hbiIsImpvYlRpdGxlIjoiQ0VPIiwiZXh0ZW5zaW9uX0N1c3RvbWVyQ29kZSI6MTAwMDIzNTc0MiwiZW1haWxzIjpbInZ0c2lvbmlzQGhvdG1haWwuY29tIl0sInRmcCI6IkIyQ18xX3Jlc291cmNlLW93bmVyIiwic2NwIjoicmVhZCB3cml0ZSIsImF6cCI6IjY2OGYwMWY3LWFhNDQtNDFiMC05ZDk5LTRkNzUxN2M0NDI5NiIsInZlciI6IjEuMCIsImlhdCI6MTU0OTU4MDgzNn0.VBbg9VDSqaIhZ3SmYwf55JlwLqe5pVRTqtFkLkK8qq8xTAjS64jkL4ajODSVW2hmNDTpGBKGN8br3gxWVnX6Gug2uPXxZ9yPehBSJAc1ra-0bA0aE45_ZDtKKglN773fKZsURRyi2GrM-mB_HuUNH6QlW786d2yee_Ua6wukNkUYRoqZSIVTcNmqZVcTCLAH3CBypD6pnvUpA3bu62HHlypr9tyIX3Z9DBGCP5xUogZhs5ynlMQjt4xAbylr3wOFLrxl2PNTS31nYOzgyVLhYF_X4sDR8K03vkFPd7xHmeHP5G8wLOMqKn0PXaodiwLjuDQVSKBObM_LL4rKPduWQg'
    }) };

    return this.http.post<IContractsResponse>( url, null, httpOptions );

  }
}
