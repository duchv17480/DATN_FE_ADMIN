import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PcService } from '../../../_service/Pc-service/pc.service';

@Component({
  selector: 'app-product-pc-detail',
  templateUrl: './product-pc-detail.component.html',
  styleUrls: ['./product-pc-detail.component.css']
})
export class ProductPcDetailComponent implements OnInit {

  productPc: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private restPc: PcService
  ) { }

  ngOnInit() {
    this.showProductPcDetail();
  }

  showProductPcDetail() {
    let id = +this.activatedRoute.snapshot.params['id'];

    this.restPc.getOneProductPCByProductId(id)
      .subscribe(response => {
        this.productPc = response.data;
        console.log(response.data, "product detail pc");
      })

  }
}
