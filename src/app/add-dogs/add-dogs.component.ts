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
  console.log(this.myForm.form.value);
  let _dogDetails = this.myForm.form.value
  let result = {user:"test test",message:"test",code:"test"}
  console.log(_dogDetails)
  if(result.user) {
    // Todo add new record
    // this.dogsSer.addNewDog(_dogDetails);

    // this.router.navigate(["/login"])
    // setTimeout(() => {
    //   window.location.reload();
    // },400)

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
