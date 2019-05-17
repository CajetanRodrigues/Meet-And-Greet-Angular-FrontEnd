import {Component,   OnInit} from '@angular/core';
import {Meeting} from "../Models/meeting";
import {MeetingService} from "../meeting.service";
import {Task} from "../Models/task";
import {TaskService} from "../task.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar, MatSnackBarModule} from "@angular/material";
import {UserService} from "../user.service";
import {User} from "../Models/user";

@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.css']
})
export class AddmeetingComponent implements OnInit {
  id : number;
  meeting = new Meeting();
  hide = true;
  private taskId: any;
  private meetings: any;
  count = 3;
  task = new Task();
  tasks : any;
  user = new User();
  private message: string;
  constructor(private meetingService : MeetingService,private  taskService : TaskService,
              private  router : Router, private snackBar : MatSnackBar, private route : ActivatedRoute,
              private userService : UserService) {
    // setTimeout(
    //   function(){
    //     location.reload();
    //   }, 1000);

  }

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
    });
  }
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getMeetingsByUserId(this.id);
    // this.userService.getIdFromEmail("rigrodtan%40gmail.com")
    //   .subscribe(user =>{ console.log('User fetched from database is : '+ JSON.stringify(user));
    //   this.user = user;
    //   console.log(user.id);
    //   this.router.navigate(['/'+this.user.id]);
    //   });
  // console.log("id Fetched is : " + this.user.id)


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
  newMeeting(): void {
    // this.meeting = new Meeting();
    this.save(this.meeting);

  }
  private save(meeting: Meeting): void {
     this.meetingService.addMeeting(meeting, this.id)
       .subscribe(meeting => this.meeting = meeting);
     console.log(this.meeting);
  this.openSnackBar();


    this.reset()
  }
   reset():void{
    this.meeting = new Meeting();

  }

  private saveAndAssignTask(meetingId:number): void {
    this.taskService.addTask(this.task)
      .subscribe(task => this.task=task);
    this.meetingService.assignTask(meetingId,this.task.id).subscribe();
    this.task = new Task();
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
  viewCreatedTasks(mid :number) {
  this.getTasksByMeetingId(mid)

  }
  updateMeeting(meeting : Meeting){
    this.router.navigate(['/meeting/'+`${meeting.id}`]);
    this.userService.userId = +this.route.snapshot.paramMap.get('id');

  }
  deleteMeeting(meeting : Meeting) {
    this.meetingService.deleteCustomer(meeting.id)
      .subscribe(() => this.message = 'Meeting Deleted Successfully!');


  }


}
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
