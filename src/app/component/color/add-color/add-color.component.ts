import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductApiService } from 'src/app/_service/product-service/product-api.service';

import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/_service/color-service/color.service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  color: any;
  Product: any;
  AddForm: FormGroup;
  grSelect:any;
  constructor(
    private ColorService: ColorService,
    private ProductApiService: ProductApiService,
    private messageService: MessageService,
    private route: Router,
    private title: Title
  ) {
    this.AddForm = new FormGroup({
      'colorName': new FormControl(null,[Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      'productId': new FormControl(null,[Validators.required]),

    });
    this.title.setTitle('Admin | color - Add');
  }

  ngOnInit(): void {
    this.ProductApiService.getAllProduct(0,50).subscribe((data) => {
      this.Product = data.data;
      console.log(data);
    });
  }
  // selectOption = (event: any) => {
  //   this.selected = event.target.value;
  // };
  selectGroup = (event: any) => {
    this.grSelect = event.target.value;
  };

  addNew() {
    this.messageService.add({ severity: 'info', summary: 'Loading', detail: 'Loading...' });
    let upload:any = {
      'colorName': this.AddForm.value.colorName,
      'productId': + this.grSelect,

    }
    setTimeout(() => {
      this.ColorService.post(upload).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' });
          setTimeout(() => {
            this.route.navigate(['/color']);

          });
        }

      });
    }, 6000);

  }

}




