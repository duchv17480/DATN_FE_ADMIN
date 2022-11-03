import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgToastService } from 'ng-angular-popup';
import { Voucher } from 'src/app/_model/voucher';
import { VoucherService } from 'src/app/_service/voucher-service/voucher.service';

@Component({
  selector: 'app-create-voucher',
  templateUrl: './create-voucher.component.html',
  styleUrls: ['./create-voucher.component.css']
})
export class CreateVoucherComponent implements OnInit {

  validForm!: FormGroup;
  vou: Voucher = new Voucher();
  startDate: Date = new Date();

  constructor(private modelService: NgbModal, private vouSer: VoucherService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.validForm = new FormGroup({
      'value': new FormControl(null, [Validators.required]),
      'endDate': new FormControl(null, [Validators.required]),
      'detail': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
    });
  }

  createVoucher() {
    this.vou.startDate = this.startDate;
    this.vouSer.createVoucher(this.vou)
    .subscribe(data => {
      console.log(data);
      this.toast.success({ summary: 'Thêm voucher thành công' , duration: 3000 });
      this.router.navigate(["list-voucher"]);
    });
  }

}
