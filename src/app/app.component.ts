import { Component } from '@angular/core';
// import {  } from '@fortawesome/fontawesome-svg-core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "./user.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  //faCoffee = faCoffee
  mode = new FormControl('side');
  constructor(private router : Router,private  userService : UserService){}
  onHome(){
    this.router.navigate(['/']);
  }
  onCreateMeeting(){
    this.router.navigate(['/addmeeting/'+this.userService.userId]);
  }
  onLogin(){
    this.router.navigate(['/login']);

  }
  onSignup(){
    this.router.navigate(['/signup']);

  }
  onShowMeetings(){
    this.router.navigate(['/showmeetings/'+this.userService.userId]);
  }
  onShowTasks(){
    this.router.navigate(['/showtasks'])
  }
  onShowUsers(){
    this.router.navigate(['/showusers'])
  }
  onLogout(){

    this.userService.userStatus = 'offline';
    console.log('User is : ' + this.userService.userStatus);
    this.router.navigate(['/login']);
  }
}
