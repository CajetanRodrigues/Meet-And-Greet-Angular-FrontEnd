import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../Models/task";

@Component({
  selector: 'app-showtasks',
  templateUrl: './showtasks.component.html',
  styleUrls: ['./showtasks.component.css']
})
export class ShowtasksComponent implements OnInit {
  private tasks: Task[];

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.getTasks();

  }

  getTasks() {
    return this.taskService.getTasks()
      .subscribe(
        tasks => {
          console.log(tasks);
          this.tasks = tasks;
        }
      );

    console.log(this.tasks)
  }


}
//spring cloud / micro services / blank api / confirm  dialog / Auth0 - SSO
