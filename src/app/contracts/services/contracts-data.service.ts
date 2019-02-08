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
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vNDU2NWE0ZDItYzFkNS00N2M2LTgxNzMtNDZhZTYwZDhmMTgzL3YyLjAvIiwiZXhwIjoxNTQ5NjE4ODY3LCJuYmYiOjE1NDk2MTUyNjcsImF1ZCI6IjY2OGYwMWY3LWFhNDQtNDFiMC05ZDk5LTRkNzUxN2M0NDI5NiIsImlkcCI6IkxvY2FsQWNjb3VudCIsIm9pZCI6ImNiNGIzZTgyLTgzOGQtNDE4Ni1iNzAyLTk0MzQ3M2Q3MjMxMCIsInN1YiI6ImNiNGIzZTgyLTgzOGQtNDE4Ni1iNzAyLTk0MzQ3M2Q3MjMxMCIsImdpdmVuX25hbWUiOiJJcm9uTWFuMiIsImZhbWlseV9uYW1lIjoiU3RhcmsiLCJuYW1lIjoiSXJvbk1hbiIsImpvYlRpdGxlIjoiQ0VPIiwiZXh0ZW5zaW9uX0N1c3RvbWVyQ29kZSI6MTAwMDIzNTc0MiwiZW1haWxzIjpbInZ0c2lvbmlzQGhvdG1haWwuY29tIl0sInRmcCI6IkIyQ18xX3Jlc291cmNlLW93bmVyIiwic2NwIjoicmVhZCB3cml0ZSIsImF6cCI6IjY2OGYwMWY3LWFhNDQtNDFiMC05ZDk5LTRkNzUxN2M0NDI5NiIsInZlciI6IjEuMCIsImlhdCI6MTU0OTYxNTI2N30.GfSoM7MVNl5T9WTmMqDh_0h2KSS0MCi0MT700FqHimn8sZAqmqNmsrEbR_gFv4Ho9IOV2gqokVXrtv8v4mQsXpeeuYGJy15jvINWa7RuX28OvWzMW9FdTvZA0KutTgxnRbq3NtcxQtVFEJ4_cPdHzeJHS0jGVVhoDeESJhvveaiTrJz0YUgO5SefrBC68UFZxVpJSPGWO2f53g_eukPBq_aHNdqG4NvcHLEytnApZ3rQ12sqo4kPemnAsqpv69bU--I33HUH_KFwrvRvATDXz5qVrrzunD1HLaxcgF6o4teqk46WrW0VcRD-earcmc-4cFtNFfcQBpdFePT80ErPKQ'
    }) };

    return this.http.post<IContractsResponse>( url, null, httpOptions );

  }
}
