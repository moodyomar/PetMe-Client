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
    if(this.myForm.form.status == "VALID"){
      let user = this.myForm.form.value
      this.usersSer.signUp(user);
      setTimeout(() => {
        this.router.navigate(["/login"])
        },400)
    }

  }

}
