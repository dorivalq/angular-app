import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { pipe } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Registration } from '../model/Registration';
//import { Registration } from '../model/Registration';

// const BASE_URL = 'http://localhost:8102/financeiro/v1/filiais/register';
const BASE_URL = 'https://5gwywg1bea.execute-api.us-east-1.amazonaws.com/dev';
const API_URL = 'https://5gwywg1bea.execute-api.us-east-1.amazonaws.com/dev';
const IMAGE_URL = 'http://localhost:8080/';
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

 saveImage(file: File, id: number): Observable<HttpEvent<{}>> {
  let formdata: FormData = new FormData();

  formdata.append('file', file);
// let head: HttpHeaders;
  //  head.append('Access-Control-Allow-Origin', '*')
  const req = new HttpRequest('POST', 'http://localhost:8080/save-image/1', formdata, {
    reportProgress: true,
    responseType: 'text'
  });

  return this.httpClient.request(req);
}

}
