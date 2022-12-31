import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const id_pro = 'id_pro';
const USER_NAME = 'auth-user-name';
const USER_ROLE = 'auth-user-role';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }


  singOut():void{
    window.localStorage.clear();
  }

  public isLoggedIn() :boolean{
    const authToken = this.getToken();

    return authToken !== null;
}


  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY,token);
  }

  public getToken(): string{
     return localStorage.getItem(TOKEN_KEY)!;
  }

  public saveUser(user:any): void{
    window.localStorage.removeItem(USER_NAME);
    window.localStorage.setItem(USER_NAME, JSON.stringify(user));
  }
  public saveidproduct(id:any): void{
    window.localStorage.removeItem(id_pro);
    window.localStorage.setItem(id_pro, JSON.stringify(id));
  }
  public saveUser_id(id:number): void{
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(id));
  }

  public saveRole(role: any){
    window.localStorage.removeItem(USER_ROLE);
    window.localStorage.setItem(USER_ROLE, JSON.stringify(role));
  }

  public clearUser(){
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.removeItem(USER_NAME);
  }



  public getUser():any{
    return JSON.parse(localStorage.getItem(USER_NAME)!);
  }
  public getUser_id():any{
    return JSON.parse(localStorage.getItem(USER_KEY)!);
  }
  public getidpro():any{
    return JSON.parse(localStorage.getItem(id_pro)!);
  }
  public getUserRole(): any{
    return JSON.parse(localStorage.getItem(USER_ROLE)!);
  }


}
