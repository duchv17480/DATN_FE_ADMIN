import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../common/Category';

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
    let headers = this.getHeader();
    if (headers instanceof HttpHeaders)
    {
      return this.httpClient.get(this.url + "/list/" ,{ headers: headers });
    }else{
      return this.httpClient.get(this.url + "/list/");
    }

  }

  getOne(id:number) {
    return this.httpClient.get(this.url+'/'+id);
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

  put(id:number, category: Category) {
    return this.httpClient.put(this.url+'/'+id, category);
  }

  delete(id:number) {
    return this.httpClient.delete(this.url+'/'+id);
  }

}
