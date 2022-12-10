import { Delivery } from './../../_model/DeliveryOrder';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderConfirm } from '../../_model/OrderConfirm';
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

  transporting(id: any): Observable<any> {
    return this.http.get(URL_order +'/being-shipped/'+id );
  }
  Cancel_byid(id: any): Observable<any> {
    return this.http.get(URL_order +'/cancelled/'+id );
  }
  getall(): Observable<any> {
    return this.http.get(URL_order  );
  }

  getAllOrderStatus():Observable<any>{
    return this.http.get(URL_order);
  }


  getOneOrder(id: number):Observable<any>{
    return this.http.get(URL_order + "/get-one/" + id);
  }

  getOneOrderDetail(id: number):Observable<any>{
    return this.http.get(URL_orderdetail + "/order-id/" + id);
  }

  canceledOrder(id: number, reason: any): Observable<any> {
    return this.http.get(URL_order + "/cancelled/" + id + '?reason=' + reason);
  }

  confilrm_byid(id: number, shipping :any): Observable<any> {
    return this.http.get(URL_order + '/order-confirm/' + id + '?shipping=' + shipping);
  }

  confirmDeliveredOrder(id:number):Observable<any>{
    return this.http.get(URL_order + "/delivered/" + id);
  }

  confirmBeingShipperOrder(id:number):Observable<any>{
    return this.http.get(URL_order + "/being-shipped/" + id);
  }

  getAllPaymentStatus(): Observable<any>{
    return this.http.get(URL_order + "/list-status-payment");
  }

  // tạo hóa đơn tại quầy
  createAnOrderAtTheCounter(): Observable<any>{
    return this.http.get(URL_order + "/create-order");
  }

  // đặt hàng tại quầy
  checkoutAnOrderAtTheCounter(id:any): Observable<any>{
    return this.http.get(URL_order + "/checkout-order/" + id );
  }

  // tạo đơn hàng giao đi

  createDeliveryOrder(delivery: Delivery): Observable<any>{
    return this.http.post(URL_order + "/create-delivery-order",delivery);
  }



}
