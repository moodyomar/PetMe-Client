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
sortSelect = 'likes'
  constructor(private dogsSer:DogsService,private apiSer:ApiService) { }

  ngOnInit(): void {
  }

  onDogSearch():void{
console.log(this.searchQ)
  }

    onSortChange(){
    console.log(this.sortSelect)
    let url = `${this.apiSer.API_URL}/dogs/.. not completed`
    this.dogsSer.doApiList(url,this.sortSelect)  
  }

}
