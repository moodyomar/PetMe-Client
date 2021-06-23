import { Component, OnInit } from '@angular/core';
import {dogs_ar_json} from "../data/sample"
import { ApiService } from '../services/api.service';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-temp-name',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  dogs_ar:any[] = [];
  dogs_ar_json:any = dogs_ar_json;
  constructor(private apiSer:ApiService,private dogsSer:DogsService) { }


  ngOnInit(): void {
this.dogs_ar = this.dogsSer.getDogs();
let url = `${this.apiSer.API_URL}/dogs/`
this.dogsSer.doApiList(url)
  }

}