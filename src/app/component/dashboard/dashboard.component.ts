import { Component, OnInit } from '@angular/core';


import { User } from 'src/app/common/User';

import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


 

  user!: User;

  constructor( private userService: UserService) { }

  ngOnInit(): void {


  }

}
