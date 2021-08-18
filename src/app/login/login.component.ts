import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  @ViewChild('f') myForm: any
  constructor(private usersSer:UsersService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage["tok"]){
      this.router.navigate(["/"])
    }
  }

  onSub() {
    if (this.myForm.form.status == "VALID") {
      // success
      let formData = this.myForm.form.value;
      try {
        this.usersSer.login(formData)
      }
      catch (err) {
        // if there is an error
        if (err.code) {
          alert("Try again user or password worng")
        }
      
      }
    }
  }
}



