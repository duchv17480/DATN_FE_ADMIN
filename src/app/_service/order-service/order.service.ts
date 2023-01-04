import { Delivery } from './../../_model/DeliveryOrder';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderConfirm } from '../../_model/OrderConfirm';
import { OrderTheCounter } from '../../_model/AtTheCounterOrder';
const URL_order = "http://localhost:8080/api/v1/order"
const URL_orderdetail = "http://localhost:8080/api/v1/orderDetail"
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }
  getAllstatus(): Observable<any> {
    return this.http.get(URL_order +'/status');
  }
  getAllby_status(status:any): Observable<any> {
    return this.http.get(URL_order +'/list-status/'+status);
  }
  getAll_CHOXACNHAN(): Observable<any> {
    return this.http.get(URL_order +'/list-status/CHOXACNHAN');
  }
  getAll_DANGXULY(): Observable<any> {
    return this.http.get(URL_order +'/list-status/DANGXULY');
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
  confilrm_byidthao(id: number): Observable<any> {
    return this.http.get(URL_order + '/order-confirm/' + id );
  }

  confirmDeliveredOrder(id:number):Observable<any>{
    return this.http.get(URL_order + "/delivered/" + id);
  }

  confirmBeingShipperOrder(id:number):Observable<any>{
    return this.http.get(URL_order + "/being-shipped/" + id);
  }

  getAllOrdersAndSearch(name: any): Observable<any> {
    return this.http.get(URL_order + '/search' + "?name=" + name)
   }

  // list hóa đơn chưa thanh toán
  getAllPaymentStatus(): Observable<any>{
    return this.http.get(URL_order + "/list-status-payment" );
  }

  // list hóa đơn đã thanh toán
  getAllPaymentStatusPaid(): Observable<any>{
    return this.http.get(URL_order + "/list-status-payment-paid");
  }

  // tạo đơn hàng bán lẻ
  createRetailOrder(): Observable<any>{
    return this.http.get(URL_order + "/create-retail-order");
  }

  // tạo hóa đơn tại quầy
  createAnOrderAtTheCounter(order: OrderTheCounter): Observable<any>{
    return this.http.post(URL_order + "/create-order",order);
  }

  // đặt hàng tại quầy
  checkoutAnOrderAtTheCounter(id:any): Observable<any>{
    return this.http.get(URL_order + "/checkout-order/" + id );
  }

  // tạo đơn hàng giao đi
  createDeliveryOrder(delivery: Delivery): Observable<any>{
    return this.http.post(URL_order + "/create-delivery-order",delivery);
  }

  // cập nhật đơn hang tại quầy
  updateOrderAtTheCounter(id:any, order: OrderTheCounter):Observable<any>{
    return this.http.put(URL_order + "/update-order/" + id,order);
  }

  // cập nhật đơn hang giao
  updateDeliveryOrder(id:any, order: Delivery):Observable<any>{
    return this.http.put(URL_order + "/update-delivery-order/" + id,order);
  }

  // cập nhật thông tin đơn hàng
  updateOrder(data: any){
    return this.http.put(URL_order + "/update",data);
  }

  // cập nhật số lượng đơn hàng chi tiết
  updateOrderDetail(id: any, data: any){
    return this.http.put(URL_orderdetail + '/update/' + id, data);
  }


}
