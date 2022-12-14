import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChipApiService } from '../../../_service/chip-service/chip-api.service';

@Component({
  selector: 'app-product-chip-detail',
  templateUrl: './product-chip-detail.component.html',
  styleUrls: ['./product-chip-detail.component.css']
})
export class ProductChipDetailComponent implements OnInit {

  productChip: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private restChip: ChipApiService
  ) { }

  ngOnInit() {
    this.showProductChipDetail();
  }

  showProductChipDetail(){
    let id = +this.activatedRoute.snapshot.params['id'];

    this.restChip.getOneProductChipByProductId(id)
    .subscribe(response=>{
      this.productChip = response.data;
      console.log(response.data, "product detail chip");
    })
  }

}



