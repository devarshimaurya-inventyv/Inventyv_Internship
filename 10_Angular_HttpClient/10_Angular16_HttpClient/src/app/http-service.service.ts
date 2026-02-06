import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

   constructor(private http:HttpClient){}

  getUser(){
    const url='https://jsonplaceholder.typicode.com/users';
    return this.http.get<any[]>(url);
  }
}
