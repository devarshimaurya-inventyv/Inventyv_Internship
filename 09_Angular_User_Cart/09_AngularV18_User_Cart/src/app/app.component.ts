import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    UserCartComponent,
    ItemListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '09_AngularV18_User_Cart';
}
