import { Component } from '@angular/core';
import { UserCartList } from '../user-cart-list';

import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'app-user-cart',
  standalone:true,
  imports: [CommonModule, MatCard, MatCardContent],
  templateUrl: './user-cart.html',
  styleUrl: './user-cart.css',
})


export class UserCart {

  constructor(public userCart:UserCartList){}

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
