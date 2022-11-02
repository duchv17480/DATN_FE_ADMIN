import { STATUS } from 'src/app/_model/status';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/_service/CategoryService/category.service';
import { Component, OnInit } from '@angular/core';
import { GroupComponentService } from 'src/app/_service/group-component/group-component.service';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {



  isLoading: boolean = true;
  groupC: any[] = [];

  categoryformEdit = new FormGroup({
    name: new FormControl('', [Validators.required]),
    status: new FormControl(STATUS.ACTIVE, [Validators.required]),
    groupId: new FormControl(1, [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  })



  constructor(
    private rest: CategoryService,
    private toast: NgToastService) { }

  ngOnInit() {
  }

  get f() {
    return this.categoryformEdit.controls;
  }

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.categoryformEdit.patchValue({
        fileSource: file
      });
    }
  }

  createCategory() {
    this.isLoading = true;
    this.rest.createCategory(this.categoryformEdit.value, this.categoryformEdit.get('fileSource')?.value)
      .subscribe(data => {
        this.isLoading = false;
        this.toast.success({ summary: 'Create category successfuly', duration: 3000 });
        console.log(data.data);

      })

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
           this.CategoryService.put( this.id,cateData).subscribe({
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


  getAllGroupComponent() {
    this.isLoading = true;
    this.rest.getAllGroupcomponent().subscribe(data => {
      this.isLoading = false;
      this.groupC = data.data;
    })
  }


}
