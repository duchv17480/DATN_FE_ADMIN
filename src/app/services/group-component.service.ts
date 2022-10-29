import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Groupcomponent } from '../common/Groupcomponent';
@Injectable({
  providedIn: 'root'
})
export class GroupComponentService {
  url = 'http://localhost:8080/api/v1/component';

  constructor(private httpClient: HttpClient) { }
  getHeader() {
    const token = localStorage.getItem("auth-token");
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token) : null;}
  getAll():Observable<any> {
    let headers = this.getHeader();
    if (headers instanceof HttpHeaders)
    {
      return this.httpClient.get(this.url + "/info/" ,{ headers: headers });
    }else{
      return this.httpClient.get(this.url + "/info/");
    }

  }
  post(Groupcomponent:Groupcomponent):Observable<any>  {
    let headers = this.getHeader();
    if (headers instanceof HttpHeaders)
    {
      return this.httpClient.post(this.url+"/create", Groupcomponent ,{ headers: headers });
    }else{
      return this.httpClient.post(this.url + "/create", Groupcomponent);
    }

  }
}
