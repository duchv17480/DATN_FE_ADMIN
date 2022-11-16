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

  deleteId!: number;


  title = '';
  page = 0;
  count = 0;
  pageSize = 10;
  pageSizes = [10, 20, 30];


  constructor(
    private rest: ProductApiService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }



  // pagination

  getRequestParams(searchName: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchName) {
      params[`name`] = searchName;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`page-number`] = pageSize;
    }

    return params;
  }




  // getAllProduct() {

  //   const params = this.getRequestParams(this.title, this.page, this.pageSize);

  //   this.rest.getAllProductsAndSearch(params).subscribe(data => {
  //     const totalItem = data.pagination.totalItem;
  //     this.products = data.data;
  //     this.count = totalItem;
  //     console.log(data);
  //   },
  //     error => {
  //       console.log(error);
  //     });
  // }

  getAllProduct() {

    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.rest.getAllProductAndImage(params).subscribe(data => {
      const totalItem = data.pagination.totalItem;
      this.products = data.data;
      this.count = totalItem;
      console.log(data);
    },
      error => {
        console.log(error);
      });
  }


  handlePageChange(event: number) {
    this.page = event;
    this.getAllProduct();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 0;
    this.getAllProduct();
  }

  searchTitle(): void {
    this.page = 0;
    this.getAllProduct();
  }

  //////////////

  confirmDeleteProduct(confirmDialog: TemplateRef<any>, id: number, name: string) {
    this.confirmMessage = `Do you want to delete ${name} ?`;
    this.deleteId = id;
    this.modalService.open(confirmDialog,
      { ariaDescribedBy: 'modal-basic-title' }).result.then((result) => {
      }).catch((err) => {

      })
  }

  deleteProduct() {
    if (this.deleteId != null) {
      this.rest.deletteProduct(this.deleteId).subscribe(data => {
        this.modalService.dismissAll();
        this.ngOnInit();
      })
    }
  }




}
