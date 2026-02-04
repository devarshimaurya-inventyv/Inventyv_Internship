import {  signal } from '@angular/core';
import { Component, ViewChildren ,QueryList } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UserCard } from './user-card/user-card';
import { Fetch } from './fetch';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [UserCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UserProfile_21');
  
  users  = signal<any[]>([]);
  @ViewChildren(UserCard) userCard!: QueryList<UserCard>;
  
  constructor(private fservice: Fetch) {}

  ngOnInit() {
        console.log("Parent: ngonint called "); 

    let user = this.fservice.getUser().subscribe((data: any) => {
      this.users.set(
        data.users.map((u: any) => ({
          ...u,
          isActive: true
        }))
      );
      this.users.set([...this.users() ,{firstName:"",isActive:true} ])
  });
  }


  ngAfterViewInit() {
    // console.log(this.userCard, 'ngviewinit'); // child instance

    this.userCard.changes.subscribe((card)=>{
      
    console.log("Parent : usercard added ", card.length); 

    })


  }

  // onNameChange() {}

  onActiveChange(event:{id:number ,isActive:boolean}) {
    console.log("Onactive changed event ", event); // child instance

    this.users.update(users =>
    users.map(u =>
      u.id === event.id
        ? { ...u, isActive: event.isActive }
        : u
    )
  );
  }
}
