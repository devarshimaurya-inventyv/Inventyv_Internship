import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-user-card',
  standalone:true,
  imports: [
    CommonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input() user!: any;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    isActive: boolean;
  }>();
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChildren(MatButton) buttons!: QueryList<MatButton>;
  ngOnInit() {
    console.log('child ngOnInit', this.user.firstName);
  }
  ngOnChanges() {
    console.log('child ngOnChanges', this.user.firstName);
  }
  ngAfterViewInit() {
    console.log('Input element:', this.nameInput.nativeElement);
    console.log('child Buttons count:', this.buttons.length);
  }

  toggleStatus() {
    this.statusChanged.emit({
      id: this.user.id,
      isActive: !this.user.isActive,
    });
  }
}
