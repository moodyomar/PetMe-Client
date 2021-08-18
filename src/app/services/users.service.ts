import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { ToastifyService } from './toastify.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isLoggedIn: any;
  userInfo: any = {};

  constructor(private apiSer: ApiService, private router: Router, private toast: ToastifyService) { }

  login(_loginData: any): void {
    let _url = `${this.apiSer.API_URL}/users/login`
    this.apiSer.postApiRequest(_url, _loginData).subscribe((resp: any) => {
      localStorage.setItem("tok", resp.token)
      this.toast.showSuccess(`You have Logged in`, "Success");
      setTimeout(() => {
        this.router.navigate(["/admin"])
      }, 1000);

    }, (rej: any) => {
      this.toast.showError("Please try again or come back later", "Wrong email or Password")
    })
  }


  signUp(_signUpData: any): void {
    let _url = `${this.apiSer.API_URL}/users/`
    this.apiSer.postApiRequest(_url, _signUpData).subscribe((resp: any) => {
      this.toast.showSuccess("You've signed up Successfully", "Welcome to PetMe")
      console.log(resp)
    }, (rej: any) => {
      if (rej.error.code == 11000) {
        this.toast.showError("Please make sure that the details are correct and not int he system", "Something went wrong")
      }
    })
  }
  logOut():void{
    localStorage.removeItem("tok")
    this.toast.showWarning(`Bye Bye ${this.userInfo.name}`, "See you soon!")
    this.router.navigate(['/login'])
  }

  getUserInfo(){
    let _url = `${this.apiSer.API_URL}/users/userInfo`
    this.apiSer.authGetRequest(_url).subscribe((res:any)=>{
      for (let key in res){
        this.userInfo[key] = res[key]
      }
    })

  }


}

