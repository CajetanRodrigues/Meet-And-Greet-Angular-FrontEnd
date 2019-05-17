import { Component, OnInit } from '@angular/core';
import {Task} from "../Models/task";
import {ActivatedRoute} from "@angular/router";
import {MeetingService} from "../meeting.service";
import {Location} from "@angular/common";
import {TaskService} from "../task.service";
import {Meeting} from "../Models/meeting";

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  task = new Task();
  private message: string;
  constructor(private route: ActivatedRoute,private taskService : TaskService,
              private location : Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
      .subscribe(task => this.task = task);
    console.log(this.task);
  }
  update(): void {
    this.taskService.updateTask(this.task)
      .subscribe(() => this.message = 'Customer Updated Successfully!');
    this.goBack();
  }
  delete(): void {
    this.taskService.deleteTask(this.task.id)
      .subscribe(() => this.message = 'Customer Deleted Successfully!');
    this.goBack();

  }
  reset():void{
    this.task = new Task();

  }
  goBack(): void {
    this.location.back();
  }

}
