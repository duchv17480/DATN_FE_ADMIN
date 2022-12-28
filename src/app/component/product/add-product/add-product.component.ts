import { Router } from '@angular/router';
import { STATUS } from 'src/app/_model/status';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Product } from 'src/app/_model/product';
import { ProductApiService } from './../../../_service/product-service/product-api.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_service/category-service/category.service';
import { BrandService } from 'src/app/_service/Brand-service/brand.service';
import { ImageApiService } from 'src/app/_service/image-service/image-api.service';
import { TokenStorageService } from 'src/app/_service/token-storage-service/token-storage.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
  product: Product = new Product;

  isLoading:boolean =false;
  id: any;
  categories: any[] = [];
  brand: any[] = [];
  selectedFiles?: FileList;
  currentFile?: File;
  preview = '';
  validateForm!: FormGroup;

  regex: string = '^[\\w\'\\-,.a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\ ][^_!¡?÷?¿/\\\\+=@#$%ˆ&*{}~<>;:[\\]]{2,}$'

  constructor(
    private restP: ProductApiService,
    private restC: CategoryService,
    private restB: BrandService,
    private toast: NgToastService,
     private route: Router,
     private _formBuilder: FormBuilder,
     private tokenStorage: TokenStorageService,
     private restI: ImageApiService,
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllBrand();

    this.validateForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(244), Validators.pattern(this.regex)]),
      'code': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      'price': new FormControl(null, [Validators.required,Validators.pattern('^[0-9]*$')]),
      'quantity': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      'discount': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      'status': new FormControl(STATUS.ACTIVE, [Validators.required]),
      'brandId': new FormControl(2, [Validators.required]),
      'categoryId': new FormControl(2, [Validators.required]),
    })
  }

  createProduct() {
    this.isLoading = true;
    this.restP.createProduct(this.product).subscribe(data => {
      this.isLoading = false;
      this.toast.success({ summary: 'Thêm sản phẩm thành công', duration: 1000 });
      this.id=data.data.id;
      this.imageformAdd.patchValue({
        product_id:
          this.id
      })
    })
  }
  imageformAdd = new FormGroup({

    'name': new FormControl('', [Validators.required]),
    'link': new FormControl('', [Validators.required]),
    'product_id': new FormControl(1, [Validators.required]),
    'file': new FormControl('', [Validators.required]),
  })

  getAllCategory() {
    this.isLoading = true;
    this.restC.getAllCategory(0, 999).subscribe(data => {
      this.isLoading = false;
      this.categories = data.data;
    })
  }

  getAllBrand(){
    this.isLoading = true;
    this.restB.getAll().subscribe(data=>{
      this.isLoading = false;
      this.brand = data.data;

    })
  }

  get f() {
    return this.imageformAdd.controls;
  }

  onFileChange(event: any) {
    this.preview = '';
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.currentFile);
      }
    }
  }

  addImage() {
    this.isLoading = true;
    this.restI.create(this.imageformAdd.value, this.currentFile).subscribe(response => {
      this.isLoading = false;
      this.toast.success({ summary: 'Thêm thành công ảnh cho sản phẩm', duration: 3000 });
      console.log(response.data);
    })
  }



}
