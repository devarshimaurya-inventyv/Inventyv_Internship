import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterOutlet],
  templateUrl: './footer.html',
  styleUrl: './footer.css'

})
export class Footer {
  protected readonly title = signal('Todo_V21');
}
