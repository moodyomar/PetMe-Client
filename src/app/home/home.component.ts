import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dogs_ar:any[] = [];
  last_4_dogs:any[] = [];
  constructor(private apiSer:ApiService,private dogsSer:DogsService) { }

  ngOnInit(): void {
    this.dogs_ar = this.dogsSer.getDogs();
    let url = `${this.apiSer.API_URL}/dogs/`
    this.dogsSer.doApiList(url)
  }

}
