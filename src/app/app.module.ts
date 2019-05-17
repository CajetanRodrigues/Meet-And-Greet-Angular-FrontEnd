import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material/material.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { SidecontentComponent } from './sidecontent/sidecontent.component';
import {AddmeetingComponent, PizzaPartyComponent} from './addmeeting/addmeeting.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MeetingService} from "./meeting.service";
import {HttpClientModule} from "@angular/common/http";
import { MeetingUpdateComponent } from './meeting-update/meeting-update.component';
import {UserService} from "./user.service";
import { ShowtasksComponent } from './showtasks/showtasks.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {TaskService} from "./task.service";
import {OtpService} from "./otp.service";
import { OtpComponent } from './otp/otp.component';
import { ShowMeetingsComponent } from './show-meetings/show-meetings.component';
import {
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';

const config = {
  issuer: 'https://dev-740252.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:8080/implicit/callback',
  clientId: '0oaj4e71zpfMRolk40h7'
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidecontentComponent,
    AddmeetingComponent,
    SignupComponent,
    LoginComponent,
    MeetingUpdateComponent,
    ShowtasksComponent,
    TaskUpdateComponent,
    ShowUsersComponent,
    UserUpdateComponent,
    AddTaskComponent,
    OtpComponent,
    PizzaPartyComponent,
    ShowMeetingsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,

    BrowserModule,

    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [MeetingService,UserService,TaskService,OtpService],
  bootstrap: [AppComponent],
  entryComponents : [PizzaPartyComponent]
})
export class AppModule { }
