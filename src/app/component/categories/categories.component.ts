import { SessionStorageService } from 'src/app/services/session-storage.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/common/Category';
import { CategoryService } from 'src/app/services/category.service';


import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/common/User';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories!: Category[];
  constructor(private categoryService: CategoryService, private toastr: ToastrService, private sessionService: SessionStorageService) { }

  ngOnInit(): void {

  }



  logout() {
    this.sessionService.deleteSession();
    window.location.href = '/login';
  }

  //lay du lieu tu database
  // getAll() {

  //   })

  // }







}
