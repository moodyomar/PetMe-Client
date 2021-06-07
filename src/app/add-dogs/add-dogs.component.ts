import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DogsService } from '../services/dogs.service';
import { ToastifyService } from '../services/toastify.service';

@Component({
  selector: 'app-add-dogs',
  templateUrl: './add-dogs.component.html',
  styleUrls: ['./add-dogs.component.css']
})
export class AddDogsComponent implements OnInit {
  @ViewChild("f") myForm:any
  constructor(private dogsSer:DogsService,private router:Router,private toast:ToastifyService) { }
  
  ngOnInit(): void {

  }

  ngDoCheck(): void {
    if(!localStorage["tok"]){
      this.router.navigate(["/login"])
    }
  }

onSub() {
  let _dogDetails = this.myForm.form.value
  let result = {user:"test test",message:"test",code:"test"}
  console.log(_dogDetails)
  if(this.myForm.form.status == "VALID"){
    if(result.user) {
      this.dogsSer.addNewDog(_dogDetails);
      setTimeout(() => {
        this.router.navigate(["/dogs"])
      },400)
  console.log(result.user)
    }
    if(result.code){
      console.log(result)
    }
  }else{
    this.toast.showError("please fill out every little detail correctly about the dog","Error")
  }

  // result.user -> success
  // result.code -> problem
  return result;
  //TODO: also add new record in db 
}

}
