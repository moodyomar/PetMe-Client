import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  @ViewChild("contactForm") myForm:any
  constructor() { }

  ngOnInit(): void {
  }

  onSub():void{
    if(this.myForm.form.status == "VALID"){
      let {name} = this.myForm.form.value
    alert(`Hey ${name.split(' ')[0]},Thank you for choosing to contact us!\n W'll get back to you ASAP!`);
      this.myForm.form.reset();
    }
  }

}
