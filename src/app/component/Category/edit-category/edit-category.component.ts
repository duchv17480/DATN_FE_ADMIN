import {  FormControl,FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { Category } from 'src/app/common/Category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from 'src/app/_service/upload/upload.service';
import { CategoryService } from 'src/app/_service/CategoryService/category.service';
import { GroupComponentService } from 'src/app/_service/CategoryService/group-component.service';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categories: any =[];
  groups:any = [];
  statusSelect:any;
  id!:number;
  cateForm: FormGroup;
  newThumb : any;
  OldImage:any;
  status: any[] = [
    { name: 'inactive', value: 0 },
    { name: 'active', value: 1 },
    { name: 'delete', value: 2 },
  ];
  selected: string = '';
  file: any = [];
  groupSelect: any
  constructor(private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private route: Router,
    private uploadFile: UploadService,
    private title: Title,
    private CategoryService: CategoryService,
    private $Group : GroupComponentService
  ) {
    this.id = activatedRoute.snapshot.params['id'];
    this.cateForm = new FormGroup({
      name: new FormControl(),
      images: new FormControl(),
      status: new FormControl(),
      groupId: new FormControl(),
    });
    this.title.setTitle('Admin | Category - Edit');
  }

  ngOnInit(): void {
    this.CategoryService.getOne(this.id).subscribe((data) => {
      this.categories = data.data;
      this.groupSelect = this.categories.groupId;
      this.statusSelect =  this.categories.status
    });

      this.$Group.getAll().subscribe((data) => {
        this.groups = data.data
      })
  }
  changeGroup = (val:any) => {{
    this.groupSelect = val.target.value
  }}
  changeStatus = (val:any) => {{
    this.statusSelect = val.target.value
  }}
  selectOption = (event: any) => {
    this.selected = event.target.value;
  };
  saveFileThumail(event: any) {
    this.file = event.target.files[0];
    this.uploadFile.uploadImg(this.file);
  }
  editCate(){
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Loading...'})
      let images  = localStorage.getItem('imgThum') || this.OldImage
        let cateData: any = {
          name: this.cateForm.value.name,
          groupId: + this.groupSelect,
          status: + this.statusSelect,
          images: images,
        };
        console.log(cateData);

        setTimeout(() => {
           this.CategoryService.patch( this.id,cateData).subscribe({
          next: (data: any) => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Edit success' })
            setTimeout(() => {
              this.route.navigate(['/categories']);
              localStorage.removeItem('imgThum');
            },2000)

          },
          error: ({ error }) => {
            this.messageService.add({ severity: 'error', summary: 'Success', detail: `${error}`})
            localStorage.removeItem('imgThum');
          },
        });
        }, 3000);


  }

}
