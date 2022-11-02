import { Component, OnInit, EventEmitter, TemplateRef, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Voucher } from 'src/app/_model/voucher';
import { VoucherService } from 'src/app/_service/voucher-service/voucher.service';

@Component({
  selector: 'app-update-voucher',
  templateUrl: './update-voucher.component.html',
  styleUrls: ['./update-voucher.component.css']
})
export class UpdateVoucherComponent implements OnInit {

  doing = false;
  validForm!: FormGroup
  vou: Voucher = new Voucher();

  @Input("id")
  editId!: number;

  @Output()
  updateFinished: EventEmitter<string> = new EventEmitter<string>();

  constructor(private modelService: NgbModal, private vouSer: VoucherService) { }

  ngOnInit(): void {
    this.validForm = new FormGroup({
      'value': new FormControl(null, [Validators.required]),
      'endDate': new FormControl(null, [Validators.required]),
      'startDate': new FormControl(null, [Validators.required]),
      'detail': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
    });

    this.vouSer.getVoucherById(this.editId)
    .subscribe(data => {
      this.vou = data.data;
    })
  }

  open(content: TemplateRef<any>) {
    this.modelService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  updateVoucher() {
    this.doing = true;
    this.vouSer.updateVoucher(this.editId, this.vou)
    .subscribe(data => {
      this.doing = false;
      this.updateFinished.emit('New chip is saved !')
      this.modelService.dismissAll();
      console.log(data);
    })
  }

}
