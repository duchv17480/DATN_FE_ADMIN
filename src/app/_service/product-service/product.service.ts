import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:8080/api/v1/product';

  constructor(private http: HttpClient) {}

  getAllProduct(page : number, pageNumber: number): Observable<any>{
    return this.http.get(this.url + '?page=' + page + '&page-number=' + pageNumber);
  }
}
