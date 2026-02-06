import { Component } from '@angular/core';
import { UserCartService } from '../user-cart.service';
import { MatCard, MatCardContent } from "@angular/material/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-cart',
  standalone: true,
  imports: [CommonModule ,MatCard,MatCardContent],
  templateUrl: './user-cart.component.html',
  styleUrl: './user-cart.component.css'
})
export class UserCartComponent {

  constructor(public userCart:UserCartService){}

   increment(item: any) {
    this.userCart.increment(item.product);
  }

  decrement(item: any) {
    this.userCart.decrement(item.product);
  }

  remove(item: any) {
    this.userCart.removeProduct(item.product);
  }
}
