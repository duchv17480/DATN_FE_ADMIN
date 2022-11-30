import { data } from 'jquery';
import { OrderService } from './../../../_service/order-service/order.service';
import { NgToastService } from 'ng-angular-popup';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionStorageService } from './../../../services/session-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
  order: any = [];
  orderdetaila: any = [];
  order_status: any = [];
  Id!: number;


  list_order: any = [];

  constructor(
    private toastr: ToastrService,
    private sessionService: SessionStorageService,
    private modalService: NgbModal,
    private toast: NgToastService,
    private OrderService: OrderService,
    private matdialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllOrder();
  }


  getAllOrder() {
    this.OrderService.getAllOrderStatus().subscribe(response => {
      this.order = response.data;
      console.log(this.list_order);
    })
  }


  getAll_choxacnhan() {
    this.OrderService.getAll_CHOXACNHAN().subscribe(data => {
      this.order = data.data;
      console.log(data);
    })

  }
  getAll_DANGXULY() {
    this.OrderService.getAll_DANGXULY().subscribe(data => {
      this.order = data.data;
      console.log(data);
    })

  }

  getAll_DANGVANCHUYEN() {
    this.OrderService.getAll_DANGVANCHUYEN().subscribe(data => {
      this.order = data.data;
      console.log(data);
    })

  }
  getAll_DAGIAO() {
    this.OrderService.getAll_DAGIAO().subscribe(data => {
      this.order = data.data;
      console.log(data);
    })

  }
  orderdetail(confirmDialog: TemplateRef<any>, id: number, order: any) {

    this.Id = id;
    this.OrderService.getorderdetail_byid(this.Id).subscribe(data => {
      this.orderdetaila = data.data.content;
      this.order_status = order;
      console.log(this.order_status.status);
      // this.matdialog.open(OrderDetailDialogComponent,{
      //   data: this.orderdetaila
      // })
    })

    this.modalService.open(confirmDialog,
      { ariaDescribedBy: 'modal-basic-title' }).result.then((result) => {
      }).catch((err) => {

      })

  }
  Confilrm(id: number) {
    this.OrderService.confilrm_byid(id).subscribe(data => {
      this.modalService.dismissAll();
      this.toast.success({ summary: 'Xác Nhận thành công', duration: 2000 });
      this.getAll_choxacnhan();


    })

  }
  cancel(id: number) {
    this.OrderService.Cancel_byid(id).subscribe(data => {
      this.modalService.dismissAll();
      this.toast.success({ summary: 'Hủy Đơn thành công', duration: 2000 });
      this.getAll_choxacnhan();


    })

  }

  getAll_DAHUY() {
    this.OrderService.getAll_DAHUY().subscribe(data => {
      this.order = data.data;
      console.log(data);
    })

  }

}
