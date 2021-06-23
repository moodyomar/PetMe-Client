import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {sortBy} from 'lodash'
import { ApiService } from './api.service';
import { ToastifyService } from './toastify.service';


@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs_ar: any[] = [];
  API_URL:string = this.apiSer.API_URL;
  dogDetailsObj:any = {};
  searchQ:any;

  constructor(private apiSer: ApiService,private toast:ToastifyService,private router:Router) { }

  getDogs(): any {
    return this.dogs_ar;
  }

  getDogDetails(url:any):void{
    this.apiSer.authGetRequest(url).subscribe((res:any)=>{
      console.log(res)
      for (let key in res){
        this.dogDetailsObj[key] = res[key]
      }
      console.log(this.dogDetailsObj)
    })
  }

  doApiList(_url: any, _sortQ:string="age"): void {
    this.dogs_ar.splice(0, this.dogs_ar.length)
    this.apiSer.getApiRequest(_url).subscribe((data: any) => {
      this.dogs_ar.push(...data);
      let temp_ar = sortBy(this.dogs_ar, _sortQ);
      this.dogs_ar.splice(0, this.dogs_ar.length);
      this.dogs_ar.push(...temp_ar);
      this.dogs_ar.reverse()
    })
  }



addNewDog(_dog:any):void{
  // not completed !
  let _url = `${this.apiSer.API_URL}/dogs/`
  this.apiSer.authPostRequest(_url,_dog).subscribe((resp:any) => {
    console.log(resp)
    this.toast.showInfo("Dog's Added !","Welcome")
  },(rej:any)=> {
    console.log(rej)
    this.toast.showError("please fill every little detail correctly about the dog !","Error")

    alert(rej.error)
  })
}

editExistedDog(url:any, _bodyData:any){
  this.apiSer.putApiRequest(url, _bodyData).subscribe((resp:any)=>{
    console.log(resp);
    this.toast.showInfo("Dog details were successfully updated", "")
    setTimeout(()=>{
      this.router.navigate(['/dogs'])
    },400)
   
  })
}

}
