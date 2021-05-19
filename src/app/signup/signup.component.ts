import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("f") myForm:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  async onSub() {
    console.log(this.myForm.form.value);
    let user = this.myForm.form.value
    // let result = await this.authFb.signUpNewUser(user);
    // deleting firebase configuration and placing test ones
    let result = {user:"test test",message:"test",code:"test"}
    console.log(result);
    if(result.user) {
      // Todo add new record
      alert('Sign up succesful')
      // this.dbFire.addUser(user);
      this.router.navigate(["/"])
      setTimeout(() => {
        window.location.reload();
      },400)
    }
    if(result.code){
      alert(result.message)
    }
    // result.user -> success
    // result.code -> problem
    return result;
    //TODO: also add new record in db of firebase
  }


}
