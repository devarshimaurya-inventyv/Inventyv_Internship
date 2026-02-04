import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserCardComponent } from './user-card/user-card.component';
import { FetchService } from './fetch.service';
import { ViewChildren, QueryList } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-root',
  // standalone:true,
  // imports:[MatSlideToggleModule,UserCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  users: any[] = [];
  @ViewChildren(UserCardComponent) userCard!: QueryList<UserCardComponent>;
  
  constructor(private fservice: FetchService) {}

  ngOnInit() {
    let user = this.fservice.getUser().subscribe((data: any) => {
      this.users = data.users;
 
      this.users.forEach((u) => (u.isActive = true));
      //without name data added
      this.users.push({firstname:"",isActive:true});
    });
  }


  ngAfterViewInit() {

    this.userCard.changes.subscribe((card)=>{
      
    console.log("usercard added ", card.length); 

    })
  }

  onActiveChange(event:{id:number ,isActive:boolean}) {
    console.log("Onactive changed event ", event);
     // child instance

    const user=this.users.find(u=>u.id === event.id);
    if(user){
      user.isActive=event.isActive;
    }
  }
}
