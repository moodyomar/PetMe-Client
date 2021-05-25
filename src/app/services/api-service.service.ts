import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  constructor(private http:HttpClient) { }

  makeApiRequest(_url:any):any {
    return this.http.get(_url);
  }

  

}
