import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchService {
  
  constructor(private http:HttpClient) {
    console.log("Service called")
   }
   getUser(){
   
      //logic for claling api
      const url="https://dummyjson.com/users";
      // console.log("user profie le data ",this.http.get(url))
      return this.http.get(url);
    }
}
