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

  doApiSearch(_url:String,_searchQ:String):void{
    if(_searchQ == ""){
      this.doApiList(_url)
     // getting all dogs without clickg ente rif its emptey or with valid dog name
    }else {
      //  if there is no such dog(serachQ) i dont want it to do all the code below
      this.dogs_ar.splice(0, this.dogs_ar.length)
    this.apiSer.getApiRequest(_url).subscribe((data: any) => {
      this.dogs_ar.push(...data);

      // if one of two or more string been search it will show results with this string
      let temp_v2 = this.dogs_ar.filter(dogs => dogs.breed.toLowerCase().includes(_searchQ))
      console.log(_searchQ)
      this.dogs_ar.splice(0, this.dogs_ar.length);
      this.dogs_ar.push(...temp_v2);
    })
    }
    
  }

uploadDogImage(file:File){
  let _url = `${this.apiSer.API_URL}/dogs/uploadImage`
  console.log('in upload image\n',file)
  this.apiSer.postUploadImage(_url,file).subscribe((resp:any) => {
console.log('in subscribe')
    console.log(file)
    console.log(resp)
    this.toast.showInfo("image uploaded !","Welcome")
  },(rej:any)=> {
    console.log(rej)
    this.toast.showError("Something is wrong!","Error")
  })
}

addNewDog(_dog:any):void{
  let _url = `${this.apiSer.API_URL}/dogs/`
  this.apiSer.authPostRequest(_url,_dog).subscribe((resp:any) => {
    this.toast.showInfo("Dog's Added !","Welcome")
  },(rej:any)=> {
    console.log(rej)
    this.toast.showError("Something is wrong, Please make sure you are singned in and try again!","Error")
  })
}

editExistedDog(url:any, _bodyData:any){
  
try{
  this.apiSer.putApiRequest(url, _bodyData).subscribe((resp:any)=>{
    if(resp.n == 1){
      this.toast.showInfo("Dog details were successfully updated", "")
    setTimeout(()=>{
      this.router.navigate(['/dogs'])
    },400)
    }else{
      this.toast.showWarning("Ops Something wrong happened !", "")
      console.log(resp);
    }
   
  })
} catch(err) {
    console.log(err);
}
}


deleteDog(url:any){
  
  try{
    this.apiSer.delApiRequest(url).subscribe((resp:any)=>{
      if(resp.n == 1){
        this.toast.showInfo("Dog is deleted successfully", "")
        setTimeout(()=>{
          this.reloadCurrentRoute();
      },300)
      }else{
        this.toast.showWarning("Ops Something wrong happened !", "")
      }
     
    })
  } catch(err) {
      console.log(err);
  }
  
  
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
  
}
