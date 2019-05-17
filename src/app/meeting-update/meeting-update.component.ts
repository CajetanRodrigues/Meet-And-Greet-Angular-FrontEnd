import { Component, OnInit } from '@angular/core';
import {Meeting} from "../Models/meeting";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {MeetingService} from "../meeting.service";
import { Location } from '@angular/common';
import {UserService} from "../user.service";
@Component({
  selector: 'app-meeting-update',
  templateUrl: './meeting-update.component.html',
  styleUrls: ['./meeting-update.component.css']
})
export class MeetingUpdateComponent implements OnInit {


   meeting = new Meeting();
  private message: string;

  constructor(private route: ActivatedRoute,private meetingService : MeetingService,
              private location : Location,private router : Router,
              private  userService : UserService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.meetingService.getMeeting(id)
      .subscribe(meeting => this.meeting = meeting);
    console.log(this.meeting);


  }
  update(): void {
    this.meetingService.updateMeeting(this.meeting)
      .subscribe(() => this.message = 'Meeting Updated Successfully!');
    this.router.navigate(['/addmeeting/'+`${this.userService.userId}`])
  }

  delete(): void {
    this.meetingService.deleteCustomer(this.meeting.id)
      .subscribe(() => this.message = 'Meeting Deleted Successfully!');


  }
   reset():void{
    this.meeting = new Meeting();

  }
  goBack(): void {
    this.location.back();
  }
}
