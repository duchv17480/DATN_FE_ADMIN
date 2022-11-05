import { RamService } from './../../../_service/ram-service/ram.service';
import { SessionStorageService } from './../../../services/session-storage.service';
import { ToastrService } from 'ngx-toastr';
import { ProductApiService } from './../../../_service/product-service/product-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ram',
  templateUrl: './list-ram.component.html',
  styleUrls: ['./list-ram.component.css']
})
export class ListRamComponent implements OnInit {


  ram: any =[];
  constructor(
     private ProductApiService: ProductApiService,
     private toastr: ToastrService,
     private sessionService: SessionStorageService,
     private RamService: RamService,
     ) { }

  ngOnInit(): void {
  this.getAll();
  }



  logout() {
    this.sessionService.deleteSession();
    window.location.href = '/login';
  }

  //lay du lieu tu database
  getAll() {
    this.RamService.getAll().subscribe(data=>{
      this.ram=data.data;
      console.log(data);
    })

    }
}
