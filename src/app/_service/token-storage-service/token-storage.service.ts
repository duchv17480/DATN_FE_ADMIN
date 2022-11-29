import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const id_pro = 'id_pro';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }


  singOut():void{
    window.localStorage.clear();
  }


  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY,token);
  }

  public getToken(): string{
     return localStorage.getItem(TOKEN_KEY)!;
  }

  public saveUser(user:any): void{
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public saveidproduct(id:any): void{
    window.localStorage.removeItem(id_pro);
    window.localStorage.setItem(id_pro, JSON.stringify(id));
  }
  public saveUser_id(id:number): void{
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(id));
  }



  public getUser():any{
    return JSON.parse(localStorage.getItem(USER_KEY)!);
  }
  public getUser_id():any{
    return JSON.parse(localStorage.getItem(USER_KEY)!);
  }
  public getidpro():any{
    return JSON.parse(localStorage.getItem(id_pro)!);
  }



}
