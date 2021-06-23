import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dogs_ar: any[] = [];
  last_4_dogs: any[] = [];
  isImmuneSystem: boolean = true;
  isPetFood: boolean = false;
  isVetVisits: boolean = false;
  
  constructor(private apiSer: ApiService, private dogsSer: DogsService,private scroll: ViewportScroller) { }

  ngOnInit(): void {
    this.dogs_ar = this.dogsSer.getDogs();
    let url = `${this.apiSer.API_URL}/dogs/`
    this.dogsSer.doApiList(url)
  }

  scrolldown(){
    this.scroll.scrollToPosition([0,5]);
    console.log("triggered")
}

  show(_theSelected: string): void {

    switch (_theSelected) {
      case 'immuneSystem':
        if(!this.isImmuneSystem)
        this.isImmuneSystem = !this.isImmuneSystem
        this.isPetFood = false;
        this.isVetVisits = false;
        break;

      case 'petFood':
        if(!this.isPetFood)
        this.isPetFood = !this.isPetFood
        this.isVetVisits = false;
        this.isImmuneSystem = false
        break;

      case 'vetVisits':
        if(!this.isVetVisits)
        this.isVetVisits = !this.isVetVisits
        this.isPetFood = false;
        this.isImmuneSystem = false
        break;

      default:
        break;
    }
  }


}
