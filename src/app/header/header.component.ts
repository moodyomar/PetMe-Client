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
  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  constructor(private userSer: UsersService,private scroll: ViewportScroller) { }

  ngOnInit(): void {
    
  }

  scrolldown(){
    this.scroll.scrollToPosition([0,450])
}

  ngDoCheck(): void {
    if (localStorage["tok"] && !this.tokenExpired(localStorage["tok"])) {
      this.isLoggedIn = true;
      this.userSer.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      localStorage.removeItem('tok')
    }
  }


logOut():void{
  this.userSer.logOut()
}

}
