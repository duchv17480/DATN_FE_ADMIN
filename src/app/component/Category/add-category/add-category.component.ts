import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_service/CategoryService/category.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { STATUS } from 'src/app/_model/status';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  isLoading: boolean = true;
  groupC: any[] = [];

  categoryform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    status: new FormControl(STATUS.ACTIVE, [Validators.required]),
    groupId: new FormControl(1, [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  })


  constructor(
    private rest: CategoryService,
    private toast: NgToastService
  ) {

  }

  get f() {
    return this.categoryform.controls;
  }

  ngOnInit(): void {
    this.getAllGroupComponent();
  }


  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.categoryform.patchValue({
        fileSource: file
      });
    }
  }

  createCategory() {
    this.isLoading = true;
    this.rest.createCategory(this.categoryform.value, this.categoryform.get('fileSource')?.value)
      .subscribe(data => {
        this.isLoading = false;
        this.toast.success({ summary: 'Create category successfuly', duration: 3000 });
        console.log(data.data);

      })

  }


  getAllGroupComponent() {
    this.isLoading = true;
    this.rest.getAllGroupcomponent().subscribe(data => {
      this.isLoading = false;
      this.groupC = data.data;
    })
  }



}
