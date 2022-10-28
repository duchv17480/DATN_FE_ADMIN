import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/common/User';

import { SessionStorageService } from 'src/app/services/session-storage.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {




  isLoading = true;

  user!:User;
  image!:string;



  constructor( private toastr: ToastrService, private sessionService: SessionStorageService) { }

  ngOnInit(): void {

  }



  //lay du lieu tu database






  
}
