import { STATUS } from 'src/app/_model/status';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Product } from 'src/app/_model/product';
import { ProductApiService } from './../../../_service/product-service/product-api.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_service/category-service/category.service';
import { VoucherService } from 'src/app/_service/voucher-service/voucher.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  product: Product = new Product;

  isLoading:boolean =false;

  categories: any[] = [];
  voucher: any[] = [];
  brand: any[] = [];

  validateForm!: FormGroup;

  constructor(
    private restP: ProductApiService,
    private restC: CategoryService,
    private restV: VoucherService,
    private restB: BrandService,
    private toast: NgToastService

  ) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllVocher();
    this.getAllBrand();

    this.validateForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'price': new FormControl(null, [Validators.required]),
      'quantity': new FormControl(null, [Validators.required]),
      'discount': new FormControl(null, [Validators.required]),
      'status': new FormControl(STATUS.ACTIVE, [Validators.required]),
      'brandId': new FormControl(2, [Validators.required]),
      'categoryId': new FormControl(2, [Validators.required]),
      'voucherId': new FormControl(2, [Validators.required]),
      'description': new FormControl(null, [Validators.required,Validators.minLength(6), Validators.maxLength(100)]),
    })

  }

  createProduct() {
    this.isLoading = true;
    this.restP.createProduct(this.product).subscribe(data => {
      this.isLoading = false;
      this.toast.success({ summary: 'Create product successfuly', duration: 3000 });
      console.log(data.data);
    })


  }


  getAllCategory() {
    this.isLoading = true;
    this.restC.getAllCategory(0, 999).subscribe(data => {
      this.isLoading = false;
      this.categories = data.data;
    })
  }

  getAllVocher(){
    this.isLoading = true;
    this.restV.getAllVoucher().subscribe(data=>{
      this.isLoading = false;
      this.voucher = data.data;
      console.log(data.data+"ghjk")
    })
  }

  getAllBrand(){
    this.isLoading = true;
    this.restB.getAll().subscribe(data=>{
      this.isLoading = false;
      this.brand = data.data;

    })
  }



}
