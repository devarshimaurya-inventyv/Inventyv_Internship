import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightSearch {


  from:String='';
  to:string='';
  depart:string='';
  return:string='';
  flights: any[] = [];
  otherFlights: any[] = [];
  issearched =false;
  cachedFlights: any;
  
  constructor(private http:HttpClient){}

   searchFlights(from: string, to: string, depart: string, ret?: string) {
  const params: any = {
    engine: 'google_flights',
    departure_id: from,
    arrival_id: to,
    outbound_date: depart,
    currency: 'USD',
    api_key: '5919cb8d55d997d77990f94058325d1cfc2f9a931693c399ebbe67f1c1efb4f7'
  };

  if (ret) {
    params.return_date = ret;
    params.type = '1';
  } else {
    params.type = '2';
  }
  
  this.issearched=true;
  this.from=from;
  this.to=to;
  this.depart=depart;

  
  return this.http.get<any>(
    'api/search.json',
    { params }
  );
}

}
