import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voucher } from 'src/app/_model/voucher';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  url = "http://localhost:8080/api/v1/voucher";

  constructor(private http: HttpClient) { }

  getAllVoucher(): Observable<any> {
    return this.http.get(this.url);
  }

  getVoucherById(id: number): Observable<any> {
    return this.http.get(this.url + "/" + id);
  }

  createVoucher(vou: Voucher): Observable<any> {
    return this.http.post(this.url + "/create", vou);
  }

  updateVoucher(id: number, vou: Voucher): Observable<any> {
    return this.http.put(this.url + "/update/" + id, vou);
  }

  deleteVoucher(id: number): Observable<any> {
    return this.http.delete(this.url + "/delete/" + id);
  }
}
