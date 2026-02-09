import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { provideHttpClient } from '@angular/common/http';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    UserCartComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [provideHttpClient(),
    MatCardModule,
    
    MatCard,
    CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
