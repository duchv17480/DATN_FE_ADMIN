import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../_service/product-service/product-api.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: any[] = [];

  constructor(
    private rest: ProductApiService
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.rest.getAllProduct(0,50).subscribe(data =>{
      this.products = data.data;
    })
  }

}
