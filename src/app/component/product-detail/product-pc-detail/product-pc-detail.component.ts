import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PcService } from '../../../_service/Pc-service/pc.service';
import { CartModel } from '../../../_model/CartModel';
import { CartService } from '../../../_service/cart-service/cart.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-product-pc-detail',
  templateUrl: './product-pc-detail.component.html',
  styleUrls: ['./product-pc-detail.component.css']
})
export class ProductPcDetailComponent implements OnInit {

  cart: CartModel = new CartModel();
  productPc: any[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private restPc: PcService,
    private restCart: CartService,
    private toast: NgToastService
  ) { }

  ngOnInit() {
    this.showProductPcDetail();
  }

  showProductPcDetail() {
    let id = +this.activatedRoute.snapshot.params['id'];

    this.restPc.getOneProductPCByProductId(id)
      .subscribe(response => {
        this.productPc = response.data;
        console.log(response.data, "product detail pc");
      })

  }

   // phần sản phẩm đặt
   addToCart(pro: any) {
    this.cart.productId = pro.productId;
    console.log(pro.id);
    this.restCart.createCart(this.cart)
      .subscribe(data => {
        this.cart = data.data;
        this.toast.success({ summary: 'Thêm sản phẩm ' + pro.name + ' thành công!', duration: 3000 });
        this.router.navigate(['/buy-offline']);
      });
  }


}
