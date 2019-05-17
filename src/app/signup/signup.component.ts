import {Component,  OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../Models/user";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {OtpService} from "../otp.service";
import {Router} from "@angular/router";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted=false;
  sendOtp=false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  user = new User();
  private confirmPass: string;
  private same: boolean;

  otp: number;
  // private OtpForm= false;
  // private SignUpPage= true;
  // successPage= false;

  ngOnInit() {
  }
  constructor(private userService : UserService, private otpService : OtpService, private router : Router) { }


  newUser(): void {
    this.submitted=true;

    // this.meeting = new Meeting();
    this.save();
  }
  private save(): void {
    //this.userService.userData.emit(this.user); // Debug this.

    this.generateOtp();
    console.log('User from source : ' + JSON.stringify(this.user));
    // this.SignUpPage = false;
    // this.OtpForm = true;
    // this.successPage = false;



  }
  reset():void{
    this.user = new User();
  }
  generateOtp(){
  this.otpService.generateOtp(this.user);
    this.userService.userData = this.user;
  //this.userService.userData.emit(this.user);
  this.router.navigate(['/generateOtp']);
  }


}
