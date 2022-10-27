import { User } from 'src/app/common/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


const AUTH_API = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }


    login(user: User) :Observable<any>{
      return this.http.post(AUTH_API + '/api/v1/auth/login-jwt',user);
    }




}
