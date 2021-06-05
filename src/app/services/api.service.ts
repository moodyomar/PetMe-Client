import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getApiRequest(_url: any): any {
    return this.http.get(_url);
  }

  authPostRequest(_url:any,_body:any){

    let xAuth = new HttpHeaders({
      'x-auth-token': localStorage['tok'],
      'content-type':'application/json'
    })

    return this.http.post(_url,_body,{headers : xAuth})
  }

  postApiRequest(_url: any, _postBody: any) {

    return this.http.post(_url, _postBody);

  }


  // getHeader(_url:any,_body:any):any{
  //   if(localStorage["tok"]){
  //     let xAuth = new HttpHeaders({
  //       'x-auth-token': localStorage['tok'],
  //       'content-type':'application/json'
  //     })
  //     return this.http.post(_url, _body ,{headers : xAuth})
  //   }
  // }

}
