import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL_order = "http://localhost:8080/api/v1/order"
const URL_orderdetail = "http://localhost:8080/api/v1/orderDetail"
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getAll_CHOXACNHAN(): Observable<any> {
    return this.http.get(URL_order +'/list-status/CHOXACNHAN');
  }
  getAll_DANGXULY(): Observable<any> {
    return this.http.get(URL_order +'/list-status/DANGSULY');
  }

  getAll_DANGVANCHUYEN(): Observable<any> {
    return this.http.get(URL_order +'/list-status/DANGVANCHUYEN');
  }
  getAll_DAGIAO(): Observable<any> {
    return this.http.get(URL_order +'/list-status/DAGIAO');
  }
  getAll_DAHUY(): Observable<any> {
    return this.http.get(URL_order +'/list-status/DAHUY');
  }
  getorderdetail_byid(id: any): Observable<any> {
    return this.http.get(URL_orderdetail +'/order/'+id + "?page=" + 0 + "&page-number=" + 50);
  }
  confilrm_byid(id: any): Observable<any> {
    return this.http.get(URL_order +'/order-confirm/'+id );
  }
  Cancel_byid(id: any): Observable<any> {
    return this.http.get(URL_order +'/cancelled/'+id );
  }

  getAllOrderStatus():Observable<any>{
    return this.http.get(URL_order);
  }



}
