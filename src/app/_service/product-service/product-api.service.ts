import { Product } from 'src/app/_model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_PROUCT = "http://localhost:8080/api/v1/product"
// const URL_CATEGORY = "http://localhost:8080/api/v1/product"
// const URL_VOCHER = "http://localhost:8080/api/v1/product"
// const URL_BRAN = "http://localhost:8080/api/v1/product"

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

  getAllProductsAndSearch(params: any): Observable<any> {
    return this.http.get(URL_PROUCT + '/search', { params })
  }

  createProduct(product: Product):Observable<any>{
    return this.http.post(URL_PROUCT + '/create',product);
  }

  updateProduct(id: number, product: Product): Observable<any>{
    return this.http.put(URL_PROUCT + '/update/' + id, product );
  }

  deletteProduct(id: number):Observable<any>{
    return this.http.delete(URL_PROUCT + '/delete/' + id);
  }

  getOne(id:number) :Observable<any>{
    return this.http.get(URL_PROUCT + '/get-one/' + id);
  }


}
