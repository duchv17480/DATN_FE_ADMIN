import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductApiService } from '../../../_service/product-service/product-api.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: any[] = [];
  confirmMessage = '';

  deleteId! : number;

  constructor(
    private rest: ProductApiService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.rest.getAllProduct(0,50).subscribe(data =>{
      this.products = data.data;
    })
  }

  confirmDeleteProduct(confirmDialog: TemplateRef<any>, id: number, name: string){
    this.confirmMessage = `Do you want to delete ${name} ?`;
    this.deleteId = id;
    this.modalService.open(confirmDialog,
      {ariaDescribedBy:'modal-basic-title'}).result.then((result)=>{
      }).catch((err)=>{

      })
  }

  deleteProduct(){
    if(this.deleteId != null){
      this.rest.deletteProduct(this.deleteId).subscribe(data=>{
        this.modalService.dismissAll();
        this.ngOnInit();
      })
    }
  }

}
