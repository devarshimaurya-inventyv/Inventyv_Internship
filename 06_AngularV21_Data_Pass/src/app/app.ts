import { Component, signal, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child],
  template: `
    <app-child></app-child>

    <button (click)="sendToChild()">Send to Child</button>
    <button (click)="getFromChild()">Get from Child</button>

    <p>Parent received: {{ received }}</p>
  `,
  styleUrl: './app.css',
})
export class App {
 received = '';

  @ViewChild(Child) child!: Child;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  sendToChild() {
    this.child.setParentMessage('Hello from Parent');
  }
  getFromChild() {
    this.received = this.child.getChildMessage();
  }
}
