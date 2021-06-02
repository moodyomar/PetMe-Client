import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiSer: ApiService,private router:Router) { }

  login(_loginData: any):void {
    let _url = 'http://localhost:3000/users/login'
    this.apiSer.postApiRequest(_url, _loginData).subscribe((resp:any) => {
      console.log(resp)
    localStorage.setItem("tok",resp.token)
    // toastify
this.router.navigate(["/addDogs"])
    },(rej:any)=> {
      alert(rej.error)
      console.log(rej)
    })

  }
  signUp(_signUpData:any):void{
    let _url = 'http://localhost:3000/users/'
    this.apiSer.postApiRequest(_url, _signUpData).subscribe((resp:any) => {
      console.log(resp)
    },(rej:any)=> {
      console.log(rej)
      alert(rej.error)
    })

  }

}