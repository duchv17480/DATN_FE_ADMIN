import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Voucher } from 'src/app/_model/voucher';
import { VoucherService } from 'src/app/_service/voucher-service/voucher.service';

@Component({
  selector: 'app-create-voucher',
  templateUrl: './create-voucher.component.html',
  styleUrls: ['./create-voucher.component.css']
})
export class CreateVoucherComponent implements OnInit {

  @Output()
  saveFinished: EventEmitter<string> = new EventEmitter<string>();

  validForm!: FormGroup;
  vou: Voucher = new Voucher();
  startDate: Date = new Date();

  constructor(private modelService: NgbModal, private vouSer: VoucherService) { }

  ngOnInit(): void {
    this.validForm = new FormGroup({
      'value': new FormControl(null, [Validators.required]),
      'endDate': new FormControl(null, [Validators.required]),
      'detail': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
    });
  }

  open(content: TemplateRef<any>) {
    this.modelService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  createVoucher() {
    this.vou.startDate = this.startDate;
    this.vouSer.createVoucher(this.vou)
    .subscribe(data => {
      console.log(data);
      this.saveFinished.emit('New favourite is saved !')
      this.modelService.dismissAll();
    });
  }

}
