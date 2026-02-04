import { Component, ViewChildren ,QueryList } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UserProfile_18';
  users: any[] = [];
  @ViewChildren(UserCardComponent) userCard!: QueryList<UserCardComponent>;
  
  constructor(private fservice: FetchService) {}

  ngOnInit() {
    let user = this.fservice.getUser().subscribe((data: any) => {
      this.users = data.users;
      this.users.forEach((u) => (u.isActive = true));
    });
      //   //without name data added
      // this.users.push({firstname:"",isActive:true});
  }


  ngAfterViewInit() {

    this.userCard.changes.subscribe((card)=>{
      
    console.log("usercard added ", card.length); 

    })


  }

  onNameChange() {}

  onActiveChange(event:{id:number ,isActive:boolean}) {
    console.log("Onactive changed event ", event); 
    // child instance

    const user=this.users.find(u=>u.id === event.id);
    if(user){
      user.isActive=event.isActive;
    }
  }

}
