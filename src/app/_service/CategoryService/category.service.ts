import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './../../common/Category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = 'http://localhost:8080/api/v1/category';

  constructor(private httpClient: HttpClient) { }
  getHeader() {
    const token = localStorage.getItem("auth-token");
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token) : null;}
  getAll():Observable<any> {

      return this.httpClient.get(this.url + "/list" );


  }

  getOne(id:number):Observable<any> {
    let headers = this.getHeader();
    if (headers instanceof HttpHeaders)
    {
      return this.httpClient.get(this.url+"/"+id,{ headers: headers });
    }else{

      return this.httpClient.get(this.url+"/"+id);
    }

  }


  post(category:Category):Observable<any>  {
    let headers = this.getHeader();
    if (headers instanceof HttpHeaders)
    {
      return this.httpClient.post(this.url+"/create", category ,{ headers: headers });
    }else{
      return this.httpClient.post(this.url + "/create",category);
    }

  }

  patch(id:any, item:any):Observable<any> {
    let headers = this.getHeader();
    if (headers instanceof HttpHeaders)
    {

      return this.httpClient.patch(this.url+"/update/"+id, item ,{ headers: headers });
    }else{

      return this.httpClient.patch(this.url+"/update/"+id, item);
    }

  }


  delete(id:number) {
    return this.httpClient.delete(this.url+'/'+id);
  }


}
