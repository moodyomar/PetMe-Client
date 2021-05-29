import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  makeApiRequest(_url: any): any {
    return this.http.get(_url);
  }

  makePostRequest(_url:any,_body:any){

    let xAuth = new HttpHeaders({
      // 'x-auth-token': localStorage['tok'],
      'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFiZmU4YjVlYmMwYTQ0NjczNTJiNzUiLCJpYXQiOjE2MjIwMzU4OTYsImV4cCI6MTYyMjAzOTQ5Nn0.HOhTgy4tIYStVp675hKUyCFRC0EQfp2t-xFKQDNWl_8',
      'content-type':'application/json'
    })

    return this.http.post(_url,_body,{headers : xAuth})
  }

simplePostRequest(_postBody:any){

  this.http.post('http://localhost:3000/users/login',_postBody).toPromise();
  
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
