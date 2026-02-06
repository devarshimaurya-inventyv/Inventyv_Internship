import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { HttpService } from '../http-service';
import { CommonModule } from '@angular/common';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Loadingservice } from '../loadingservice';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // users$: Observable<any[]>;
  // constructor(private http: HttpService) {
  //   // call API here
  //   this.users$ = this.http.getUser();
  // }
  data: any[] = [];
   loader = inject(Loadingservice);

  constructor(
    private http: HttpService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit() {
    this.loader.show();
    setTimeout(() => {
      this.http.getUser().subscribe((data: any) => {
        this.data = data;
        console.log('API success:', data);
        this.loader.hide();
      });
    }, 5000);

    console.log('next lien called');
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
