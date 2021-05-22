import { Component, OnInit } from '@angular/core';
import {dogs_ar_json} from "../data/sample"

@Component({
  selector: 'app-temp-name',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  dogs_ar:any[] = dogs_ar_json;
  constructor() { }

  ngOnInit(): void {
// this.dogs_ar = dogs_ar_json
  }

}