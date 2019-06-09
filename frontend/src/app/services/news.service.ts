import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';


const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params  = new HttpParams().set('apiKey', apiKey);
//const par1 = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newSubscription;
  constructor(private http : HttpClient) { 

  }

getData(url){
  return this.http.get(`${apiUrl}/${url}`, {params}).pipe(
    tap(data => {
      console.log(data);
    })
  )
}
}
