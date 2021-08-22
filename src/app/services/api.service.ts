import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API_URL: string = "https://mapetme.herokuapp.com"
  API_URL: string = "http://localhost:3000"
  isLoggedIn:any;

  constructor(private http: HttpClient) { }

  getApiRequest(_url: any): any {
    return this.http.get(_url);
  }

authGetRequest(_url:any):any{
  if (localStorage['tok']) {
    let xAuth = new HttpHeaders({
      'x-auth-token': localStorage['tok'],
      'content-type': 'application/json'
    })
    return this.http.get(_url, { headers: xAuth })
  }
}

  postApiRequest(_url: any, _postBody: any) {

    return this.http.post(_url, _postBody);

  }

  authPostRequest(_url:any,_body:any):any{
    if(localStorage['tok']){
        let xAuth = new HttpHeaders({
          'x-auth-token': localStorage['tok'],
          'content-type':'application/json'
        })
    
        return this.http.post(_url,_body,{headers : xAuth})
      }
    }

  putApiRequest(_url: any, _bodyData: any): any {
    if (localStorage['tok']) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['tok'],
        'content-type': 'application/json'
      })
      return this.http.put(_url, _bodyData, { headers: xAuth })
    }
  }

  delApiRequest(_url: any): any {

    if (localStorage['tok']) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['tok'],
        'content-type': 'application/json'
      })
      return this.http.delete(_url, { headers: xAuth })
    }

  }

}
