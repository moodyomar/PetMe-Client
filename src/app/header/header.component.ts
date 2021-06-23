import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  classApplied = false;
  isLoggedIn:boolean = false;

  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  constructor(private userSer: UsersService,private scroll: ViewportScroller) { }

  ngOnInit(): void {
    
  }

  scrolldown(){
    this.scroll.scrollToPosition([0,500])
    console.log("triggered")
}

  ngDoCheck(): void {
    if (localStorage["tok"]) {
      this.isLoggedIn = true;
      this.userSer.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }


logOut():void{
  this.userSer.logOut()
}

}
