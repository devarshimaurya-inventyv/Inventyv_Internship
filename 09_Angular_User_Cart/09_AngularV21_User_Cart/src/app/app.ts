import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 import {ItemList} from './item-list/item-list';
 import {UserCart} from './user-cart/user-cart'
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,
    UserCart,
    ItemList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('User_Cart_21');
}
