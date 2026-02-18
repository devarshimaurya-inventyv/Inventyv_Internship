import { Component } from '@angular/core';
import { FlightSearch } from '../home/services/flight-search';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { CommonModule } from '@angular/common';
import { SearchController } from '../home/component/search-controller/search-controller';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-results',
  standalone: true,
  imports: [Header, Footer, CommonModule, SearchController],
  templateUrl: './flight-results.html',
  styleUrl: './flight-results.css',
})
export class FlightResults {
  flights: any[] = [];
  otherflights: any[] = [];

  constructor(private flightservice: FlightSearch, private route:ActivatedRoute
  ) {}
  ngOnInit() {
   
     this.route.queryParams.subscribe(params => {
      const from = params['from'];
      const to = params['to'];
      const date = params['date'];

      if (from && to && date) {
        // If we have cached response and it matches requested params, use it
        const cache = this.flightservice.cachedFlights;
        if (cache && this.cacheMatchesParams(cache, from, to, date)) {
          
          this.flights = cache.best_flights || [];
          this.otherflights = cache.other_flights || [];
        } else {
          
          this.loadFlight({ from, to, date });
        }
      } 
      // else {
      //   // No query params — show whatever is in the service cache/fields (if any)
      //   this.flights = this.flightservice.flights || [];
      //   this.otherflights = this.flightservice.otherFlights || [];
      // }
    });
  }

  private cacheMatchesParams(cache: any, from: string, to: string, date: string): boolean {
    try {
      const sp = cache.search_parameters || cache.searchParameters || {};
      // SerpAPI example uses departure_id/arrival_id/outbound_date
      console.log("catchparams called")
      return sp.departure_id === from && sp.arrival_id === to && sp.outbound_date === date;
    } catch {
      return false;
    }
  }

  loadFlight(params:any){

    this.flightservice.searchFlights(params['from'],
      params['to'],
      params['date']).subscribe((data:any)=>{
       this.flights = data.best_flights;
      this.otherflights = data.other_flights || [];

        this.flightservice.cachedFlights = data;
        this.flightservice.flights = this.flights;
        this.flightservice.otherFlights = this.otherflights;

    },err => {
        console.error('Failed loadFlight', err);
        this.flights = [];
        this.otherflights = [];
      }
  )
  }
}
