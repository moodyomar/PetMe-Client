import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-search-nsort',
  templateUrl: './search-nsort.component.html',
  styleUrls: ['./search-nsort.component.css']
})
export class SearchNsortComponent implements OnInit {
  searchQ: any = '';
  sortSelect = 'age'
  constructor(private dogsSer: DogsService, private apiSer: ApiService) { }

  ngOnInit(): void {
  }

  onDogSearch(): void {
    let searchQ = this.searchQ.toLowerCase()
    this.dogsSer.searchQ = searchQ;
    let url = `${this.apiSer.API_URL}/dogs`
    // let dogs = this.dogsSer.getDogs()
    // let temp_v2 = dogs.filter((dog: any) => dog.breed.toLowerCase().includes(searchQ))
    console.log(searchQ.length)
    if (searchQ.length - 1 > 1 || searchQ.length == 1) this.dogsSer.doApiSearch(url, searchQ)

  }

  onSortChange() {
    let url = `${this.apiSer.API_URL}/dogs`
    this.dogsSer.doApiList(url, this.sortSelect)
  }

}
