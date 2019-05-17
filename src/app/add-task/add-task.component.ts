import { Component, OnInit } from '@angular/core';
import {Task} from "../Models/task";
import {TaskService} from "../task.service";
import {MeetingService} from "../meeting.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task = new Task();
  private meetingId: number;
  constructor(private taskService : TaskService, private meetingService : MeetingService) { }

  ngOnInit() {
  }
  onNewTask(): void {
    // this.meeting = new Meeting();
    this.save();

  }
  private save(): void {
    console.log(this.task);

    this.taskService.addTask(this.task)
      .subscribe(task => this.task=task);
    this.meetingService.assignTask(this.meetingId,this.task.id).subscribe();
    this.task = new Task();
  }
  reset():void{
    this.task = new Task();

  }

}
