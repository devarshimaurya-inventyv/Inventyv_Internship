import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class content {
  protected readonly title = signal('Todo_V21');

  leftfaq = [
    {
      title: 'How does Skyscanner work?',
      content:
        'We’re a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you’ve found the best flight, car hire or hotel, you book directly with the provider.',
      open: false,
    },
    {
      title: 'How can I find cheapest flights?',
      content: 'Explanation...',
      open: false,
    },
     {
      title: 'Does Skyscanner do hotels too?',
      content:
        'Yes! You can use the same magic that powers our flight search to find your perfect stay anywhere..',
      open: false,
    },
    {
      title: 'What about car hire?',
      content: 'Car hire info...',
      open: false,
    },
  ];

  rightFaq = [
    {
      title: 'Does Skyscanner do hotels too?',
      content:
        'Yes! You can use the same magic that powers our flight search to find your perfect stay anywhere..',
      open: false,
    },
    {
      title: 'What about car hire?',
      content: 'Car hire info...',
      open: false,
    },
      {
      title: 'How does Skyscanner work?',
      content:
        'We’re a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you’ve found the best flight, car hire or hotel, you book directly with the provider.',
      open: false,
    },
    {
      title: 'How can I find cheapest flights?',
      content: 'Explanation...',
      open: false,
    },
  ];

  toggleleft(i: number) {
    this.leftfaq[i].open = !this.leftfaq[i].open;
  }
  toggleright(i: number) {
    this.rightFaq[i].open = !this.rightFaq[i].open;
  }
}
