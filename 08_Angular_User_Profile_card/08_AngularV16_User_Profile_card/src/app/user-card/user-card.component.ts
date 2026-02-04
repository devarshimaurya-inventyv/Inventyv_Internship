import { Component, 
Input,
Output,
EventEmitter,
ViewChild,
ViewChildren,
ElementRef,
QueryList } from '@angular/core';
import {MatButton } from '@angular/material/button';

@Component({
  selector: 'app-user-card',
  // standalone:true,
  // imports:[MatSlideToggleModule,MatCardModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user!:any;
  @Output() statusChanged = new EventEmitter<{
    id:number,
    isActive:boolean
  }>
  @ViewChild('nameInput') nameInput!:ElementRef<HTMLInputElement>;
  @ViewChildren(MatButton) buttons!:QueryList<MatButton>;
  ngOnInit(){
console.log('ngOnInit', this.user.firstName);

  }
  ngOnChanges(){
console.log('ngOnChanges', this.user.firstName);
  }
  ngAfterViewInit(){
    console.log('Input element:', this.nameInput.nativeElement);
console.log('Buttons count:', this.buttons.length);
  }



toggleStatus() {
this.statusChanged.emit({
id: this.user.id,
isActive: !this.user.isActive
});
}
}
