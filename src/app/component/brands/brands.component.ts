import { SessionStorageService } from './../../services/session-storage.service';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands: any = [];
  constructor(private BrandService: BrandService, private toastr: ToastrService, private sessionService: SessionStorageService) { }

  ngOnInit(): void {
    this.getAll();
  }



  logout() {
    this.sessionService.deleteSession();
    window.location.href = '/login';
  }

  //lay du lieu tu database
  getAll() {
    this.BrandService.getAll().subscribe(data => {
      this.brands = data.data;
      console.log(data);
    })

  }
}
