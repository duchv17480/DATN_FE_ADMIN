import { BrandService } from '../../../services/brand.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import {FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/_service/upload/upload.service';
import { GroupComponentService } from 'src/app/_service/group-component/group-component.service';

@Component({
  selector: 'app-add-group-component',
  templateUrl: './add-group-component.component.html',
  styleUrls: ['./add-group-component.component.css']
})
export class AddGroupComponentComponent implements OnInit {

  brands: any;
  AddForm: FormGroup;
  file: any = [];
  status: any[] = [
    { name: 'active', value: 'active' },
    { name: 'hidden', value: 'hidden' },
  ];

  grSelect:any;
  constructor(
    private GroupComponentService: GroupComponentService,
    private BrandService: BrandService,
    private messageService: MessageService,
    private route: Router,
    private uploadFile: UploadService,
    private title: Title
  ) {
    this.AddForm = new FormGroup({
      name: new FormControl(),
      brandId: new FormControl(),

    });
    this.title.setTitle('Admin | GroupComponent - Add');
  }

  ngOnInit(): void {
    this.BrandService.getAll().subscribe((data) => {
      this.brands = data.data;
      console.log(data);
    });
  }
  // selectOption = (event: any) => {
  //   this.selected = event.target.value;
  // };
  selectGroup = (event: any) => {
    this.grSelect = event.target.value;
  };
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
  }

  addNew() {
    this.messageService.add({ severity: 'info', summary: 'Loading', detail: 'Loading...' });
    let upload:any = {
      name: this.AddForm.value.name,
      brandId: + this.grSelect,

    }
    setTimeout(() => {
      this.GroupComponentService.post(upload).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' });
          setTimeout(() => {
            this.route.navigate(['/groupcomponent']);

          });
        }

      });
    }, 6000);



  }

}
