import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http:HttpClient){}

  getUser(){
    const url='https://jsonplaceholder.typicode.com/users';
    return this.http.get<any[]>(url);
  }

}
