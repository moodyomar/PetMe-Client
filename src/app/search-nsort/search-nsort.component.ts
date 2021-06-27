import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-search-nsort',
  templateUrl: './search-nsort.component.html',
  styleUrls: ['./search-nsort.component.css']
})
export class SearchNsortComponent implements OnInit {
searchQ:any = '';
sortSelect = 'age'
  constructor(private dogsSer:DogsService,private apiSer:ApiService) { }

  ngOnInit(): void {
  }

  onDogSearch():void{
this.dogsSer.searchQ = this.searchQ;
let url = `${this.apiSer.API_URL}/dogs`
    this.dogsSer.doApiSearch(url,this.searchQ)  
    
  }

    onSortChange(){
    let url = `${this.apiSer.API_URL}/dogs`
    this.dogsSer.doApiList(url,this.sortSelect)  
  }

}
