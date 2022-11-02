import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_PROUCT = "http://localhost:8080/api/v1/product"

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {



  constructor(
    private http: HttpClient
  ) { }


  getAllProduct(page: number, pageNumber: number): Observable<any> {
    return this.http.get(URL_PROUCT + "?page=" + page + "&page-number=" + pageNumber);
  }


}
