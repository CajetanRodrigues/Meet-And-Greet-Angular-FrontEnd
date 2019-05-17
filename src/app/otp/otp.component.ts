import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OtpService} from "../otp.service";
import { Router} from "@angular/router";
import {User} from "../Models/user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  id :any;
  otpMessage="";
  private otp: number;
  private result: boolean;
  private user = new User();
  userReceived : any;
  name : string;
  domain : string;
  email : string;
  constructor(private otpService : OtpService, private router : Router,private userService : UserService) { }

  ngOnInit() {
    this.user = this.userService.userData;
   // this.userService.userData.subscribe(user => this.user = user);
    console.log('Actual user fetched from prev : ' + JSON.stringify(this.user));

  }

  verifyOtp(otp: number){
    // this.SignUpPage = false;
    // this.OtpForm = false;
    // this.successPage = true;
    // console.log('Actual user fetched from prev : ' + JSON.stringify(this.user));

    //console.log('User fetched from prev : ' + JSON.stringify({name:'Cajetan',email:'rigrodtan@gmail.com',role:'Maveick',password:'rigrodtan'}));

   this.otpService.checkOtp(this.otp,this.userService.userData)
     .subscribe((userReceived:any) => this.userReceived = userReceived);
   console.log('Output of check : ' + JSON.stringify(this.userReceived));
    if(this.userReceived!=null){
      console.log('Signup Successful');
      this.userService.addUser(this.user)
        .subscribe((user : User) => this.user = user);
      console.log('The user is added in database and returned back : ' + JSON.stringify(this.user));
      // Break email into parts
  this.email = this.user.email;
       this.name   = this.email.substring(0, this.email.lastIndexOf("@"));
      this.domain = this.email.substring(this.email.lastIndexOf("@") +1);
      this.userService.getIdFromEmail(this.name + '%40'+this.name)
        .subscribe(user =>{ console.log('User fetched from database is : '+ JSON.stringify(user));
          this.user = user;
          this.otpService.userFromSignUpForm = this.user;
          console.log(user.id);
          this.router.navigate(['/login/']);
        });
    }
    else {
      console.log('Signup Unsuccessful');
      this.otpMessage="Invalid Otp ! Please recheck your email";
    }
  }
  reset(){
this.otp = null;
  }

}
