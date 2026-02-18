import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css'

})
export class Header {
  protected readonly title = signal('Todo_V21');
}
