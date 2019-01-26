import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Registration } from '../model/Registration';
//import { Registration } from '../model/Registration';

// const BASE_URL = 'http://localhost:8102/financeiro/v1/filiais/register';
const BASE_URL = 'https://5gwywg1bea.execute-api.us-east-1.amazonaws.com/dev';
const API_URL = 'https://5gwywg1bea.execute-api.us-east-1.amazonaws.com/dev';
@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  save(regModel: Registration): Observable<Response> {
    console.log('Calling  the Gateway Api: ' + API_URL);
    return this.httpClient.post(API_URL, regModel).
      pipe(
        map((response: Response) => response)
      );
  }

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<any> {
    return this.httpClient.get(BASE_URL).
      pipe(
        map((response: Response) => response)
      );
  }

  /*obterTodas(): Observable<any> {
    return this.httpClient.get(`${BASE_URL}`)
      .pipe(
        map((response: Response) => response)
      )
  }
  */
}
