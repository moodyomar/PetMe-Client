import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  classApplied = false;
  isLoggedIn = true;

  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  constructor() { }

  ngOnInit(): void {
    if (localStorage["tok"]) {
      this.isLoggedIn = false;
    }
  }

logOut():void{
  localStorage.removeItem("tok")
  window.location.reload()
}

}
