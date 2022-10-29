import { SessionStorageService } from './../../services/session-storage.service';
import { ToastrService } from 'ngx-toastr';
import { GroupComponentService } from './../../services/group-component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-component',
  templateUrl: './group-component.component.html',
  styleUrls: ['./group-component.component.css']
})
export class GroupComponentComponent implements OnInit {
  group_component: any =[];
  constructor(private GroupComponentService: GroupComponentService, private toastr: ToastrService, private sessionService: SessionStorageService) { }

  ngOnInit(): void {
this.getAll();
  }



  logout() {
    this.sessionService.deleteSession();
    window.location.href = '/login';
  }

  //lay du lieu tu database
  getAll() {
    this.GroupComponentService.getAll().subscribe(data=>{
      this.group_component=data.data;
      console.log(data);
    })

    }
}