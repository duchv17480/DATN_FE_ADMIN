import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  url = 'http://localhost:8080/api/v1/review';
  constructor(private httpClient: HttpClient) { }
  getHeader() {
    const token = localStorage.getItem("auth-token");
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token) : null;}
  getAll():Observable<any> {

      return this.httpClient.get(this.url+"/list" );


  }
  post(id:number,review:any):Observable<any>  {
      return this.httpClient.post(this.url+"/create/"+id , review);
  }
}
