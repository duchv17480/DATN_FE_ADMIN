import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  url = 'http://localhost:8080/api/v1/color';
  constructor(private httpClient: HttpClient) { }
  getHeader() {
    const token = localStorage.getItem("auth-token");
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token) : null;}
  getAll():Observable<any> {
    let headers = this.getHeader();
    if (headers instanceof HttpHeaders)
    {
      return this.httpClient.get(this.url ,{ headers: headers });
    }else{
      return this.httpClient.get(this.url );
    }

  }
}
