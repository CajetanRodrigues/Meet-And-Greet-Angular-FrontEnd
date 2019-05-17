import { Component, OnInit } from '@angular/core';
import {Meeting} from "../Models/meeting";
import {MeetingService} from "../meeting.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Task} from "../Models/task";
import {UserService} from "../user.service";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-show-meetings',
  templateUrl: './show-meetings.component.html',
  styleUrls: ['./show-meetings.component.css']
})
export class ShowMeetingsComponent implements OnInit {
  meetings :any;
  tasks : any;
  task = new Task();
   message: string;
   id: number;
  constructor(private userService : UserService, private taskService : TaskService,
    private meetingService : MeetingService,private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getMeetingsByUserId(this.id);
    console.log(this.id);
  }
  getMeetingsByUserId(uid: number) {
    return this.meetingService.getMeetingsByUserId(uid)
      .subscribe(
        meetings => {
          console.log(meetings);
          this.meetings = meetings;

        }
      );

    console.log(this.meetings)
  }
  updateMeeting(meeting : Meeting){
    this.router.navigate(['/meeting/'+`${meeting.id}`]);
    this.userService.userId = +this.route.snapshot.paramMap.get('id');

  }
  deleteMeeting(meeting : Meeting) {
    this.meetingService.deleteCustomer(meeting.id)
      .subscribe(() => this.message = 'Meeting Deleted Successfully!');


  }
   saveAndAssignTask(meetingId:number): void {
    this.taskService.addTask(this.task)
      .subscribe(task => this.task=task);
    this.meetingService.assignTask(meetingId,this.task.id).subscribe();
    this.task = new Task();
  }
  viewCreatedTasks(mid :number) {
    this.getTasksByMeetingId(mid)

  }
  getTasksByMeetingId(mid : number) {
    return this.taskService.getTasksByMeetingId(mid)
      .subscribe(
        tasks => {
          this.tasks = tasks;
        }
      );
    console.log(this.tasks);

  }
}
