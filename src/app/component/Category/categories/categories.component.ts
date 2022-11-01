import { SessionStorageService } from 'src/app/services/session-storage.service';

import { Component, OnInit, ViewChild } from '@angular/core';



import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/common/User';
import { CategoryService } from 'src/app/_service/CategoryService/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private sessionService: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  logout() {
    this.sessionService.deleteSession();
    window.location.href = '/login';
  }

  //lay du lieu tu database
  getAll() {
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data.data;
      console.log(data);
    });
  }
}
