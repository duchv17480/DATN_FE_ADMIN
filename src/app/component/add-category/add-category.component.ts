import { GroupComponentService } from './../../services/group-component.service';
import { UploadService } from './../../services/upload.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoryService } from './../../services/category.service';
import { FormControl,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
    { name: 'active', value: 'active' },
    { name: 'hidden', value: 'hidden' },
  ];
  selected: string = '';
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
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
  }
  addNew() {
    this.messageService.add({ severity: 'info', summary: 'Loading', detail: 'Loading...' });
    let upload:any = {
      name: this.AddForm.value.name,
      images: this.AddForm.value.images,
      status: this.AddForm.value.status,
      groupId: 1,

    }
    setTimeout(() => {
      this.CategoryService.post(upload).subscribe({
        next: (data: any) => {
          // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add success' })
          setTimeout(() => {
            this.route.navigate(['/categories']);

          });
        }

      });
    }, 6000);



  }
}
