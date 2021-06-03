import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("f") myForm:any
  constructor(private router:Router,private usersSer:UsersService ) { }

  ngOnInit(): void {
  }

   onSub() {
    console.log(this.myForm.form.value);
    let user = this.myForm.form.value
    let result = {user:"test test",message:"test",code:"test"}
    if(result.user) {
      // Todo add new record
    this.usersSer.signUp(user);
    setTimeout(() => {
      this.router.navigate(["/login"])
      },400)

    }
    if(result.code){
      console.log(result.message)
    }
    // result.user -> success
    // result.code -> problem
    return result;
    //TODO: also add new record in db of firebase
  }


}
