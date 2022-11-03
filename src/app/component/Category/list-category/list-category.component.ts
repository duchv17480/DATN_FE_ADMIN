import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../../_service/category-service/category.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {


  isLoading: boolean = true;
  categories: any[] = [];
  confirmMessage = '';
  deleteId! :number;

  constructor(
    private rest: CategoryService,
    private modalService: NgbModal,
    private toast: NgToastService,
  ) {

   }

  ngOnInit() {
    this.getAllCategory();
  }


  confirmDeleteCategory(confirmDialog: TemplateRef<any>, id: number, name: string){
    this.confirmMessage = `Do you want to delete ${name} ?`;
    this.deleteId = id;
    this.modalService.open(confirmDialog,
      {ariaDescribedBy:'modal-basic-title'}).result.then((result)=>{
      }).catch((err)=>{

      })
  }

  deleteCategory(){
    if(this.deleteId != null){
      this.rest.deleteCategory(this.deleteId).subscribe(data=>{
        this.modalService.dismissAll();
        this.ngOnInit();
        this.toast.success({ summary: 'Delete category successfuly', duration: 3000 });
      })

    }
  }


  getAllCategory() {
    this.isLoading = true;
    this.rest.getAllCategory(0, 999).subscribe(data => {
      this.categories = data.data;
      this.isLoading = false;
      console.log(data.data);
    })
  }

}
