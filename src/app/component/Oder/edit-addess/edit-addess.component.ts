import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GhnService } from '../../../_service/ghn-service/ghn.service';
import { OrderTheCounter } from '../../../_model/AtTheCounterOrder';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-addess',
  templateUrl: './edit-addess.component.html',
  styleUrls: ['./edit-addess.component.css']
})
export class EditAddessComponent implements OnInit {

  //phan api GHN
  provinceName: any;
  districtName: any;
  wardName: any;
  province: any[] = [];
  district: any[] = [];
  ward: any[] = [];

  shippingTotal: any;
  serviceId: any;
  addressName: any;
  totalAmount: number = 0;
  orderAt: OrderTheCounter = new OrderTheCounter;
  validFormAtTheCounterOrder!: FormGroup;


  constructor(
    private matDialogRef: MatDialogRef<EditAddessComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private ghnService: GhnService,
    private toast: NgToastService,
  ) { }

  ngOnInit() {
    console.log(this.dataDialog);
    this.getProvinces();
    this.validFormAtTheCounterOrder = new FormGroup({
      'province': new FormControl(null, [Validators.required]),
      'district': new FormControl(null, [Validators.required]),
      'ward': new FormControl(null, [Validators.required]),
    })
  }

  // phần api giao hang nhanh

  getShipping(districtId: any) {
    const data = {
      "shop_id": 3526682,
      "from_district": 1542, // tu ha dong
      "to_district": districtId
    }



    this.ghnService.getService(data).subscribe(res => {
      if (res.data.length <= 1) {
        this.serviceId = res.data[0].service_id;
      } else {
        this.serviceId = res.data[1].service_id;
      }

      const shippingOrder = {
        "service_id": this.serviceId,
        "insurance_value": this.totalAmount,
        "from_district_id": 3440,
        "to_district_id": data.to_district,
        "weight": 20
      }

      this.ghnService.getShipping(shippingOrder).subscribe(res => {
        this.shippingTotal = res.data.total;
      })

    })

  }

  getProvinces() {
    this.ghnService.getProvince().subscribe(response => {
      this.province = response.data;
    })
  }

  getDistrict(provinceId: any, provinceName: any) {
    this.ghnService.getDistrict(provinceId).subscribe((res: any) => {
      this.district = res.data;
    })
    this.provinceName = provinceName;
  }

  getWard(districtId: any, districtName: any) {
    this.getShipping(districtId);
    this.ghnService.getWard(districtId).subscribe((res: any) => {
      this.ward = res.data;
    })
    this.districtName = districtName;
  }

  getWardName(wardName: any) {
    this.wardName = wardName;
    this.addressName = this.wardName + ', ' + this.districtName + ', ' + this.provinceName;

  }

  onSubmit(){
    // console.log(this.validFormAtTheCounterOrder.value);
    // console.log(this.addressName);
    // console.log(this.shippingTotal);
    this.dataDialog.address = this.addressName;
    this.dataDialog.province = this.validFormAtTheCounterOrder.value.province;
    this.dataDialog.district = this.validFormAtTheCounterOrder.value.district;
    this.dataDialog.ward = this.validFormAtTheCounterOrder.value.ward;
    this.dataDialog.shipping = this.shippingTotal;
    console.log(this.dataDialog);

    this.toast.error({ summary: 'Đợi API cập nhật đơn', duration: 2000 });

  }

  close(){
    this.matDialogRef.close('cancel');
  }

}
