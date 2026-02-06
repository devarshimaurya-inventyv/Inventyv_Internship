import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { CommonModule } from '@angular/common';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingserviceService } from '../loadingservice.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.Component.html',
  styleUrl: './user.component.css',
})
export class User {
  // users$: Observable<any[]>;
  // constructor(private http: HttpService) {
  //   // call API here
  //   this.users$ = this.http.getUser();
  // }
  data: any[] = [];
   loader = inject(LoadingserviceService);

  constructor(
    private http: HttpServiceService,
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
