import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./Models/user";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private rest = 'http://localhost:1234/rest/';  // URL to web api
  userFromSignUpForm : User;
  constructor(private http: HttpClient) { }

  generateOtp(user: User){

   this.http.post<void>(this.rest+'user/generateOtp',user,httpOptions).subscribe();
  }
  checkOtp(otp : number, user : any): Observable<any> {

    return this.http.post<any>(this.rest+'user/verifyOtp/'+`${otp}`,user,httpOptions)
  }
}
