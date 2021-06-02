import { Component, OnInit, ViewChild } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-add-dogs',
  templateUrl: './add-dogs.component.html',
  styleUrls: ['./add-dogs.component.css']
})
export class AddDogsComponent implements OnInit {
  @ViewChild("f") myForm:any
  constructor(private dogsSer:DogsService) { }
  
  ngOnInit(): void {
  }


onSub() {
  let _dogDetails = this.myForm.form.value
  let result = {user:"test test",message:"test",code:"test"}
  console.log(_dogDetails)
  if(this.myForm.form.status == "VALID"){
    if(result.user) {
      // Todo add new record
      this.dogsSer.addNewDog(_dogDetails);
  
      // this.router.navigate(["/login"])
      // setTimeout(() => {
      //   window.location.reload();
      // },400)
  console.log(result.user)
    }
    if(result.code){
      console.log(result)
    }
  }else{
    alert("please fill out every little detail correctly about the dog")
  }

  // result.user -> success
  // result.code -> problem
  return result;
  //TODO: also add new record in db 
}

}
