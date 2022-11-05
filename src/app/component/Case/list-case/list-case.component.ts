import { CasesService } from './../../../_service/Cases-service/cases.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { ToastrService } from 'ngx-toastr';
import { ProductApiService } from 'src/app/_service/product-service/product-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-case',
  templateUrl: './list-case.component.html',
  styleUrls: ['./list-case.component.css']
})
export class ListCaseComponent implements OnInit {

  cases: any =[];
  constructor(
     private ProductApiService: ProductApiService,
     private toastr: ToastrService,
     private sessionService: SessionStorageService,
     private CasesService: CasesService,
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
    this.CasesService.getAll().subscribe(data=>{
      this.cases=data.data;
      console.log(data);
    })

    }

}
