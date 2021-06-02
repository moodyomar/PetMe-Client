import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs_ar: any[] = [];
  constructor(private apiSer: ApiService) { }

  getDogs(): any {
    return this.dogs_ar;
  }

  doApiList(_url: any): void {
    this.dogs_ar.splice(0, this.dogs_ar.length)
    this.apiSer.getApiRequest(_url).subscribe((data: any) => {
      this.dogs_ar.push(...data);
    })
  }



addNewDog(_dog:any):void{
  // not completed !
  let _url = 'http://localhost:3000/dogs/'
  this.apiSer.authPostRequest(_url,_dog).subscribe((resp:any) => {
    console.log(resp)
  },(rej:any)=> {
    console.log(rej)
    alert(rej.error)
  })

}

}
