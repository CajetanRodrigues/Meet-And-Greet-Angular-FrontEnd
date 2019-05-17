import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AddmeetingComponent} from "./addmeeting/addmeeting.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {MeetingUpdateComponent} from "./meeting-update/meeting-update.component";
import {ShowtasksComponent} from "./showtasks/showtasks.component";
import {TaskUpdateComponent} from "./task-update/task-update.component";
import {ShowUsersComponent} from "./show-users/show-users.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {OtpComponent} from "./otp/otp.component";
import {ShowMeetingsComponent} from "./show-meetings/show-meetings.component";

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'addmeeting/:id' , component : AddmeetingComponent},
  { path : 'addmeeting' , component : AddmeetingComponent},
  { path : 'showmeetings/:id',component :ShowMeetingsComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'signup' , component : SignupComponent},
  { path : 'meeting/:id' , component : MeetingUpdateComponent},
  { path : 'showtasks' , component : ShowtasksComponent},
  { path : 'task/:id' , component : TaskUpdateComponent},
  { path : 'showusers' , component : ShowUsersComponent},
  { path : 'addtask' , component : AddTaskComponent},
  { path : 'generateOtp' , component : OtpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
