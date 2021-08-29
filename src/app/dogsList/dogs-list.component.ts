import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DogsService } from '../services/dogs.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-temp-name',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  dogs_ar:any[] = [];
isLoggedIn:boolean = false;
showModal:boolean = false;
idDel:String = '';
userInfo:any = {};


  constructor(private apiSer:ApiService,private dogsSer:DogsService,private userSer:UsersService) { }


  ngOnInit(): void {
this.dogs_ar = this.dogsSer.getDogs();
let url = `${this.apiSer.API_URL}/dogs/`
this.dogsSer.doApiList(url)
if (localStorage["tok"]) {
  this.isLoggedIn = true;
  this.userSer.isLoggedIn = true;
  this.userSer.getUserInfo()
  this.userInfo = this.userSer.userInfo
} else {
  this.isLoggedIn = false;
  this.userSer.isLoggedIn = false;
}
  }

  ngDoCheck(): void {
    if (localStorage["tok"]) {
      this.isLoggedIn = true;
      this.userSer.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      this.userSer.isLoggedIn = false;
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