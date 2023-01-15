import { Component, OnInit, TemplateRef } from '@angular/core';
import { PcService } from 'src/app/_service/Pc-service/pc.service';
import { data } from 'jquery';
import { NgToastService } from 'ng-angular-popup';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-pc',
  templateUrl: './list-pc.component.html',
  styleUrls: ['./list-pc.component.css']
})
export class ListPcComponent implements OnInit {

  lPc!: any[];

  deleteId!: number;
  isLoading: boolean = false;

  page = 0;
  count = 0;
  pageSize = 10;
  pageSizes = [10, 20, 30];

  constructor(
    private restPc: PcService,
    private modalService: NgbModal,
    private toast: NgToastService,

  ) { }

  ngOnInit() {
    this.listPC();
  }


  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`page-size`] = pageSize;
    }

    return params;
  }


  listPC() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.restPc.listPc(params).subscribe(res=>{

      const totalItem = res.pagination.totalItem;
      this.count = totalItem;
      this.lPc = res.data;
    })
  }


  handlePageChange(event: number) {
    this.page = event;
    this.listPC();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 0;
    this.listPC();
  }


  confirmDeleteProduct(confirmDialog: TemplateRef<any>, id: number) {
    this.deleteId = id;
    this.modalService.open(confirmDialog,
      { ariaDescribedBy: 'modal-basic-title' }).result.then((result) => {
      }).catch((err) => {

      })
  }




}
