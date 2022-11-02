import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/api/v1/management';

  constructor(private http: HttpClient) {}

  getAllUser(): Observable<any>{
    return this.http.get(this.url + "/accounts");
  }
}
