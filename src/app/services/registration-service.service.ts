import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe} from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:8102/financeiro/v1/filiais/register';
@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<any>{
    return this.httpClient.get(BASE_URL).
      pipe(
        map( (response: Response) =>response )
      )
  }

  /*obterTodas(): Observable<any> {
    return this.httpClient.get(`${BASE_URL}`)
      .pipe(
        map((response: Response) => response)
      )
  }
  */
}
