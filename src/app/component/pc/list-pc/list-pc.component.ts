import { Component, OnInit } from '@angular/core';
import { PcService } from 'src/app/_service/Pc-service/pc.service';

@Component({
  selector: 'app-list-pc',
  templateUrl: './list-pc.component.html',
  styleUrls: ['./list-pc.component.css']
})
export class ListPcComponent implements OnInit {

  lPc!: any[];

  constructor(
    private restPc: PcService

  ) { }

  ngOnInit() {

  }


  listPC(){

  }




}
