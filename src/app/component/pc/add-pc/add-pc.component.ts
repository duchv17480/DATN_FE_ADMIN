import { Component, OnInit } from '@angular/core';
import { ChipApiService } from '../../../_service/chip-service/chip-api.service';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html',
  styleUrls: ['./add-pc.component.css']
})
export class AddPcComponent implements OnInit {

  products: any[] = [];
  constructor(
    private rest: ChipApiService
  ) { }

  ngOnInit() {
    this.getCateProductChip();
  }


  getCateProductChip(){
    this.rest.getCateProductChip().subscribe((res:any)=>{
      this.products = res.data
    })
  }

}
