import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DogsService } from '../services/dogs.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
    dogs_ar:any[] = [];
    usersDogs:any[] = [];
  isLoggedIn = true;
  userInfo:any = {};
  displayUserDogs:Boolean = false;
  showModal:boolean = false;
  idDel:String = '';

  constructor(private router:Router,private userSer:UsersService,private dogsSer:DogsService,private apiSer:ApiService) { }

ngOnInit(): void {
this.dogs_ar = this.dogsSer.getDogs();
let url = `${this.apiSer.API_URL}/dogs/`
this.dogsSer.doApiList(url)

if (localStorage["tok"]) {
  this.isLoggedIn = true;
  this.userSer.isLoggedIn = true;
  this.userSer.getUserInfo()
  this.userInfo = this.userSer.userInfo;

setTimeout(() => {
  this.usersDogs = this.dogs_ar.filter(dog => dog.user_id === this.userInfo._id)
  console.log(this.userInfo)
}, 500);


} else {
  this.isLoggedIn = false;
  this.userSer.isLoggedIn = false;
}
  }

  showUserDogs():void{
this.displayUserDogs = !this.displayUserDogs
  }

  ngDoCheck(): void {
    if (localStorage["tok"]) {
      this.isLoggedIn = true;
      this.userSer.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      this.userSer.isLoggedIn = false;
      this.router.navigate(['/login'])
    }
  }

  ifYes():void{
    let url = `${this.apiSer.API_URL}/dogs/${this.idDel}`
    this.dogsSer.deleteDog(url)
    this.showModal = !this.showModal
    }
    ifNo():void{
      this.showModal = !this.showModal;
    }
      userDeleteRequest(_id:String):void{
        this.showModal = !this.showModal
        this.idDel = _id;
      }

  
}
