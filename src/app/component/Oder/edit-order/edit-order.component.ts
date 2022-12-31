import { OrderService } from './../../../_service/order-service/order.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  orderdetail: any = [];

  displayedColumns: string[] = ['price', 'quantity', 'product', 'image', 'func'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private OrderService: OrderService,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
  ) { }

  ngOnInit() {
    this.getOrderDetail();
  }

  getOrderDetail(){
    this.OrderService.getorderdetail_byid(this.dataDialog.id).subscribe(data => {
      this.orderdetail = data.data.content;
      this.dataSource = new MatTableDataSource<any>(data.data.content);
      this.dataSource.data = data.data.content;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data);

    })
  }

  setQuantity(event: any, index: any, data: any){
    console.log(data);
  }

  deleteProduct(){
    console.log('delete product');

  }

}
