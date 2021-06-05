import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { ToastifyService } from './toastify.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiSer: ApiService,private router:Router,private toast:ToastifyService) { }

  login(_loginData: any):void {
    let _url = 'http://localhost:3000/users/login'
    this.apiSer.postApiRequest(_url, _loginData).subscribe((resp:any) => {
      console.log(resp)
      this.toast.showSuccess("Logged in Successfully","Success")
    localStorage.setItem("tok",resp.token)
    // toastify
setTimeout(() => {
  // window.location.reload()
  this.router.navigate(["/admin"])
}, 1000);

    },(rej:any)=> {
      this.toast.showError("Wrong email or Password !","Error")
      console.log(rej)
    })

  }
  signUp(_signUpData:any):void{
    let _url = 'http://localhost:3000/users/'
    this.apiSer.postApiRequest(_url, _signUpData).subscribe((resp:any) => {
      this.toast.showSuccess("You've Signed up Successfully","Welcome")
      console.log(resp)
    },(rej:any)=> {
      this.toast.showError("Please fill out the details correctly !","Error")
      console.log(rej)
      alert(rej.error)
    })

  }

}