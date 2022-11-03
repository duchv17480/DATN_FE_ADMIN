import { Component, OnInit, EventEmitter, TemplateRef, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgToastService } from 'ng-angular-popup';
import { Voucher } from 'src/app/_model/voucher';
import { VoucherService } from 'src/app/_service/voucher-service/voucher.service';

@Component({
  selector: 'app-update-voucher',
  templateUrl: './update-voucher.component.html',
  styleUrls: ['./update-voucher.component.css']
})
export class UpdateVoucherComponent implements OnInit {

  validForm!: FormGroup
  vou: Voucher = new Voucher();

  constructor(private vouSer: VoucherService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toast: NgToastService) { }

  ngOnInit(): void {
    this.validForm = new FormGroup({
      'value': new FormControl(null, [Validators.required]),
      'endDate': new FormControl(null, [Validators.required]),
      'startDate': new FormControl(null, [Validators.required]),
      'detail': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
    });

    let id = +this.activatedRoute.snapshot.params['id'];
    this.vouSer.getVoucherById(id)
    .subscribe(data => {
      this.vou = data.data;
    })
  }


  updateVoucher() {
    this.vouSer.updateVoucher(this.vou)
    .subscribe(data => {
      this.toast.success({ summary: 'Cập nhật voucher thành công' , duration: 3000 });
      this.router.navigate(["list-voucher"]);
      console.log(data);
    })
  }

}
