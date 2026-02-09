import { Component } from '@angular/core';
import { UserCartService } from '../user-cart.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
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
