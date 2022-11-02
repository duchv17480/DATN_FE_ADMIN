


import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { FormControl,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CategoryService } from 'src/app/_service/CategoryService/category.service';
import { GroupComponentService } from 'src/app/_service/group-component/group-component.service';
import { UploadService } from 'src/app/_service/upload/upload.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  groupcomponent: any;
  AddForm: FormGroup;
  file: any = [];
  status: any[] = [
    { name: 'inactive', value: 0 },
    { name: 'active', value: 1 },
    { name: 'delete', value: 2 },
  ];
  selected: any;
  grSelect:any
    constructor(
    private CategoryService: CategoryService,
    private messageService: MessageService,
    private route: Router,
    private uploadFile: UploadService,
    private GroupComponentService:GroupComponentService,
    private title: Title
  ) {
    this.AddForm = new FormGroup({
      name: new FormControl(),
      images: new FormControl(),
      groupId: new FormControl(),
      status: new FormControl(),
    });
    this.title.setTitle('Admin | Category - Add');
  }

  ngOnInit(): void {
    this.GroupComponentService.getAll().subscribe((data) => {
      this.groupcomponent = data.data;
      console.log(data);
    });
  }
  selectOption = (event: any) => {
    this.selected = event.target.value;
  };
  selectGroup = (event: any) => {
    this.grSelect = event.target.value;
  };
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
  }
  addNew() {
    this.messageService.add({ severity: 'info', summary: 'Loading', detail: 'Loading...' });
    let image  = localStorage.getItem('imgThum')
    let upload:any = {
      name: this.AddForm.value.name,
      images: image,
      status: + this.selected,
      groupId:+ this.grSelect,

    }


    setTimeout(() => {
      this.CategoryService.post(upload).subscribe({
        next: (data: any) => {
         this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' })
          setTimeout(() => {
            this.route.navigate(['/categories']);

          });
        }

      });
    }, 6000);



  }
}
