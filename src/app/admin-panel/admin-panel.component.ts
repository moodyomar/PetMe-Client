import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  isLoggedIn = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(!localStorage["tok"]){
      this.router.navigate(["/login"])
    }else{
      this.isLoggedIn = false;
    }
  }

}
