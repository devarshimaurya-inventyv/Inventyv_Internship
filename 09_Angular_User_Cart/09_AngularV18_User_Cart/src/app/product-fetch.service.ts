
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductFetchService {
  constructor(private http:HttpClient){} 

  getProduct(){
    const url= "https://fake-store-api.mock.beeceptor.com/api/products";
    return this.http.get(url);
  }
}
