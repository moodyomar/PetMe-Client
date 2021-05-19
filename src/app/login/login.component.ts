import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') myForm:any
  constructor() { }

  ngOnInit(): void {
  }

  async onSub(){
    if(this.myForm.form.status == "VALID"){
      // success
      let formData = this.myForm.form.value;
      try{
        // let data = await this.authSer.logInFb(formData.email,formData.password);
        // deleting firebase configiruation and placing a test ones
        let data = {user:'empty test'}
        // success log in
        if(data.user){
          // TODO : redirect to admin
          // localStorage.setItem("fb_user",data.user.uid)
          // this.route.navigate(["/admin"])
        }
        console.log(data);
      }
      catch(err){
        // if there an error
        if(err.code){
          alert("Try again user or password worng")
        }
        console.log(err);
      }
      console.log(this.myForm.form.value);
    }
  }
}



