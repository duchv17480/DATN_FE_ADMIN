import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Voucher } from 'src/app/_model/voucher';
import { VoucherService } from 'src/app/_service/voucher-service/voucher.service';

@Component({
  selector: 'app-list-voucher',
  templateUrl: './list-voucher.component.html',
  styleUrls: ['./list-voucher.component.css']
})
export class ListVoucherComponent implements OnInit {

  vous: Voucher[] = [];
  confirmMessage= '';
  deleteId!: number;

  constructor(private modalService: NgbModal, private vouSer: VoucherService) { }

  ngOnInit(): void {
    this.getAllVoucher();
  }

  getAllVoucher() {
    this.vouSer.getAllVoucher()
    .subscribe(data => {
      this.vous = data.data;
    })
  }

  confirmDeleteFavourite(confirmDialog: TemplateRef<any>, id: number){
    this.confirmMessage = `Do you want to delete ` + id + `?`;
    this.deleteId = id;
    this.modalService.open(confirmDialog,
      {ariaDescribedBy:'modal-basic-title'}).result.then((result)=>{
      }).catch((err)=>{

      })
  }

  deleteFavourite(){
    if(this.deleteId != null){
      this.vouSer.deleteVoucher(this.deleteId)
      .subscribe(data => {
        this.modalService.dismissAll();
        this.ngOnInit();
      });
    }
  }

  finishAndAlert(message: string){
    this.ngOnInit();
  }

}
