import { Component, OnInit } from '@angular/core';
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {Router, RouterModule} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-sidecontent',
  templateUrl: './sidecontent.component.html',
  styleUrls: ['./sidecontent.component.css']
})
export class SidecontentComponent implements OnInit {
  constructor(private router : Router,private userService : UserService) { }
  userStatus = 'offline';
  ngOnInit() {
    this.userStatus = this.userService.userStatus;
  }
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
