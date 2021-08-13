import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-edit-dogs',
  templateUrl: './edit-dogs.component.html',
  styleUrls: ['./edit-dogs.component.css']
})
export class EditDogsComponent implements OnInit {
  @ViewChild("f") myForm: any;
  dogDetailsObj:any = {}
  constructor(private dogsSer:DogsService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let idEdit = this.route.snapshot.paramMap.get('id');
    let url = `${this.dogsSer.API_URL}/dogs/single/${idEdit}`
    this.dogsSer.getDogDetails(url);
    this.dogDetailsObj = this.dogsSer.dogDetailsObj
    console.log(this.dogDetailsObj)
  }


  ngDoCheck(): void {
    if(!localStorage["tok"]){
      this.router.navigate(["/login"])
    }
  }
  
  editDog(){
      let idEdit = this.route.snapshot.params['id'];
      let url = `${this.dogsSer.API_URL}/dogs/${idEdit}`;
      if (this.myForm.form.status == "VALID") {
        let dataBody = this.myForm.form.value;
        console.log(idEdit)
        console.log(dataBody)
        this.dogsSer.editExistedDog(url, dataBody);
      }
  }

 
}