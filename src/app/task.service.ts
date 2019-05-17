import { Injectable } from '@angular/core';
import {Meeting} from "./Models/meeting";
import {Observable} from "rxjs";
import {Task} from "./Models/task";
import {HttpClient, HttpHeaders} from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private rest = 'http://localhost:1234/rest/';  // URL to web api

  constructor(private http: HttpClient) { }

  addTask(task: Task) : Observable<any> {

    return this.http.post<Task>(this.rest+'task', task, httpOptions);
  }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.rest+'tasks')
  }
  getTask(id : number) : Observable<Task> {

    return this.http.get<Task>(this.rest + 'task/' +id);


  }
  getTasksByMeetingId(mid : number) : Observable<Task> {

    return this.http.get<Task>(this.rest + 'tasks/' +mid);


  }
  deleteTask (id : number): Observable<Task> {
    return this.http.delete<Task>(this.rest+'task/'+ `${id}`, httpOptions);
  }

  updateTask (task:Task): Observable<Task> {
    return this.http.put<Task>(this.rest+'task/'+ `${task.id}`, task, httpOptions);
  }


}
