import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiSer: ApiService,private router:Router,private toastService: ToastService) { }

  login(_loginData: any):void {
    let _url = 'http://localhost:3000/users/login'
    this.apiSer.postApiRequest(_url, _loginData).subscribe((resp:any) => {
      console.log(resp)
      this.toastService.success("Logged in Successfully ")
    localStorage.setItem("tok",resp.token)
    // toastify
setTimeout(() => {
  this.router.navigate(["/addDogs"])
}, 1000);

    },(rej:any)=> {
      this.toastService.error(rej.error)
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