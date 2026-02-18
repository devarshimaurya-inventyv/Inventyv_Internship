import { CommonModule, ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //
import { FlightSearch } from '../../services/flight-search';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-search-controller',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-controller.html',
  styleUrl: './search-controller.css',
})
export class SearchController {

  from: string = '';
  to: string = '';
  depart: string = ' ';
  return?: string;
  isOpen = false;

  today: string = new Date().toISOString().split('T')[0];

  selected = 'Oneway';

  options = ['Oneway', 'Return', 'Multicity'];

  cities = [
    { code: 'CDG', name: 'Paris (CDG)' },
    { code: 'AUS', name: 'Austin (AUS)' },
    { code: 'EWR', name: 'Newark (EWR)' },
    { code: 'DFW', name: 'Dallas (DFW)' },
  ];

  constructor(
    public flightService: FlightSearch,
    private router: Router,
  ) {
    //notwkrong correctly
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
         this.flightService.issearched=event.urlAfterRedirects.startsWith('/flight_results')
      });
  }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log('toggle' + this.isOpen);
  }

  select(option: string) {
    console.log('select');
    this.selected = option;
    this.isOpen = false;
  }

  swapLocations() {
    const temp = this.to;
    this.to = this.from;
    this.from = temp;
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  searchflight(): void {
    // if (this.flightService.cachedFlights) {
    //   console.log("caching called for flights")
    //   this.router.navigate(['/flight_results'], {
    //     queryParams: {
    //       from: this.from,
    //       to: this.to,
    //       date: this.depart,
    //     },
    //   });

    //   // this.flightService.issearched=true;

    //   return;
    // }

    console.log('pure searching called');
    this.flightService
      .searchFlights(this.from, this.to, this.depart, this.return)
      .subscribe((res) => {
        console.log(res);
        this.flightService.flights = (res as any).best_flights;
        this.flightService.otherFlights = res.other_flights || [];
        console.log('flights : ', this.flightService.flights);
        console.log('otherflights : ', this.flightService.otherFlights);

        this.flightService.cachedFlights = res;

        this.router.navigate(['/flight_results'], {
          queryParams: {
            from: this.from,
            to: this.to,
            date: this.depart,
          },
            
            // replaceUrl: true        
        }
        // ,{
        //     replaceUrl: true;

        // }
      );
      });
    // this.flightService.issearched = true;
    this.flightService.from = this.from;
    this.flightService.to = this.to;
    this.flightService.depart = this.depart;
  }
}
