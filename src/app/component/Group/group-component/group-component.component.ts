import { SessionStorageService } from '../../../services/session-storage.service';
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { GroupComponentService } from 'src/app/_service/group-component/group-component.service';

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
