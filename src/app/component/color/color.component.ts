import { SessionStorageService } from './../../services/session-storage.service';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color: any =[];
  constructor(private ColorService: ColorService, private toastr: ToastrService, private sessionService: SessionStorageService) { }

  ngOnInit(): void {
  this.getAll();
  }



  logout() {
    this.sessionService.deleteSession();
    window.location.href = '/login';
  }

  //lay du lieu tu database
  getAll() {
    this.ColorService.getAll().subscribe(data=>{
      this.color=data.data;
      console.log(data);
    })

    }

}
