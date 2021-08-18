import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  isLoggedIn = true;
  userInfo:any = {};
  constructor(private router:Router,private userSer:UsersService) { }

  ngOnInit(): void {

    if (localStorage["tok"]) {
      this.isLoggedIn = true;
      this.userSer.isLoggedIn = true;
      this.userSer.getUserInfo()
      this.userInfo = this.userSer.userInfo
      console.log(this.userInfo)
      
    } else {
      this.isLoggedIn = false;
      this.router.navigate(["/login"])
    }

  }

  ngDoCheck(): void {
   
  }

  
}
