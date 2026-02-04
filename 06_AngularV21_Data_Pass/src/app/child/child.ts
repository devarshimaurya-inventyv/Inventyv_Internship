import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  standalone: true,
  template: `
    <p>Received from parent: {{ parentMessage }}</p>
  `,
  styleUrl: './child.css',
})
export class Child {
  parentMessage = '';
  childMessage = '';

  setParentMessage(msg: string) {
    this.parentMessage = msg;
  }
  getChildMessage() {
    this.childMessage = 'Hello from Child';

    return this.childMessage;
  }
}
