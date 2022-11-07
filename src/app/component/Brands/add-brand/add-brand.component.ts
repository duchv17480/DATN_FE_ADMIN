import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/_service/Brand-service/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {



  AddForm: FormGroup;

  constructor(
    private BrandService: BrandService,

    private messageService: MessageService,
    private route: Router,
    private title: Title
  ) {
    this.AddForm = new FormGroup({
      'brandName': new FormControl(null,[Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      'description': new FormControl(null,[Validators.required, Validators.minLength(1), Validators.maxLength(50)]),

    });
    this.title.setTitle('Admin | color - Add');
  }

  ngOnInit(): void {

  }


  addNew() {
    this.messageService.add({ severity: 'info', summary: 'Loading', detail: 'Loading...' });
    let upload:any = {
      'brandName': this.AddForm.value.brandName,
      'description': this.AddForm.value.description

    }
    setTimeout(() => {
      this.BrandService.post(upload).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' });
          setTimeout(() => {
            this.route.navigate(['/brand']);

          });
        }

      });
    }, 6000);

  }

}
