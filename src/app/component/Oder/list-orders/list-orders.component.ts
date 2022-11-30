import { OrderService } from './../../../_service/order-service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  listOrder: any[] = [];


  constructor(
    private rest: OrderService,
  ) { }

  ngOnInit() {
    this.getAllOrder();
  }

  getAllOrder() {
    this.rest.getAllOrderStatus().subscribe(response => {
      this.listOrder = response.data;
      console.log(this.listOrder);
    })
  }

  getAll_choxacnhan() {
    this.rest.getAll_CHOXACNHAN().subscribe(data => {
      this.listOrder = data.data;
      console.log(data);
    })

  }

  getAll_DANGXULY() {
    this.rest.getAll_DANGXULY().subscribe(data => {
      this.listOrder = data.data;
      console.log(data);
    })

  }

  getAll_DANGVANCHUYEN() {
    this.rest.getAll_DANGVANCHUYEN().subscribe(data => {
      this.listOrder = data.data;
      console.log(data);
    })

  }
  getAll_DAGIAO() {
    this.rest.getAll_DAGIAO().subscribe(data => {
      this.listOrder = data.data;
      console.log(data);
    })

  }

}
