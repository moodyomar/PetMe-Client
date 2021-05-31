import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') myForm: any
  constructor(private usersSer:UsersService) { }

  ngOnInit(): void {
  }

  onSub() {
    if (this.myForm.form.status == "VALID") {
      // success
      let formData = this.myForm.form.value;
      try {
        let data = { user: 'empty test' }
        this.usersSer.login(formData)
        // success log in
        if (data.user) {
          // TODO : redirect to admin
          // this.route.navigate(["/admin"])
        }
        console.log(data);
      }
      catch (err) {
        // if there an error
        if (err.code) {
          alert("Try again user or password worng")
        }
        console.log(err);
      }
      console.log(this.myForm.form.value);
    }
  }
}



