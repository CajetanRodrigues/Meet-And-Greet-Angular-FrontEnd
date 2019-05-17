import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../Models/user";
import {Router} from "@angular/router";
import {OtpService} from "../otp.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  userReceived = null;
  private loginMessage = '';

  constructor(private userService : UserService,private router : Router,private  otpService : OtpService) { }

  ngOnInit() {

    // this.user = this.otpService.userFromSignUpForm;
    // this.user.password="";
  }

  validateUser(): void {
    // this.meeting = new Meeting();
    this.save();

  }
  private save(): void {
    console.log('Before Sending -> ' + JSON.stringify(this.user));
    this.userService.validateUser(this.user)
      .subscribe(userReceived =>{
        console.log('User Received : ' + JSON.stringify(userReceived));
        this.userReceived = userReceived;
      } );

    if(this.userReceived!=null){
      console.log('User Online');
      this.userService.userId = this.userReceived.id;
      this.userService.userStatus = 'online';
      this.router.navigate(['/addmeeting/'+ `${this.userReceived.id}`]);
    }
    else{
      this.loginMessage = 'Invalid login credentials';

    }

  }
  reset():void{
    this.user = new User();
  }
  goToSignup(){
    this.router.navigate(['/signup'])
  }
}
