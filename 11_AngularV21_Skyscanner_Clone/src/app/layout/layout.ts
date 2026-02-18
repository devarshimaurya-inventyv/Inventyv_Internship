import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { SearchController } from "../pages/home/component/search-controller/search-controller";
import { content } from './content/content';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer, SearchController ,content],
  templateUrl: './layout.html',
})
export class layout {
  protected readonly title = signal('Todo_V21');
}
