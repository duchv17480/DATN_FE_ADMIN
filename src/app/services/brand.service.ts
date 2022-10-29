import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Brands } from '../common/Brands';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = 'http://localhost:8080/api/v1/brand';

  constructor(private httpClient: HttpClient) { }
  getHeader() {
    const token = localStorage.getItem("auth-token");
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token) : null;}
  getAll():Observable<any> {
    let headers = this.getHeader();
    if (headers instanceof HttpHeaders)
    {
      return this.httpClient.get(this.url  ,{ headers: headers });
    }else{
      return this.httpClient.get(this.url );
    }

  }

  getOne(id:number) {
    return this.httpClient.get(this.url+'/'+id);
  }

  // post(category:Brands):Observable<any>  {
  //   let headers = this.getHeader();
  //   if (headers instanceof HttpHeaders)
  //   {
  //     return this.httpClient.post(this.url+"/create", Brands ,{ headers: headers });
  //   }else{
  //     return this.httpClient.post(this.url + "/create", Brands);
  //   }

  // }

  // put(id:number, category: Category) {
  //   return this.httpClient.put(this.url+'/'+id, category);
  // }

  // delete(id:number) {
  //   return this.httpClient.delete(this.url+'/'+id);
  // }
}
