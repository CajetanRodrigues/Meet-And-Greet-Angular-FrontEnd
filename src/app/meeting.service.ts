import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Meeting} from "./Models/meeting";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private rest = 'http://localhost:1234/rest/';  // URL to web api


  constructor(private http: HttpClient) { }

  getMeetings (): Observable<any[]> {

    return this.http.get<any[]>(this.rest+'meetings')
  }

  getMeeting(id : number) : Observable<Meeting> {
    if(id){}
      else{id=1}
    console.log(this.rest + 'meeting/' +id )
    console.log(this.http.get<Meeting>(this.rest + 'meeting/' +id))
    return this.http.get<Meeting>(this.rest + 'meeting/' + `${id}`);


  }
  getMeetingsByUserId(userId : number) : Observable<Meeting> {
    if(userId){}
    else{userId=1}
    // console.log(this.rest + 'meeting/' +userId )
    // console.log(this.http.get<Meeting>(this.rest + 'meeting/' +userId))
    return this.http.get<Meeting>(this.rest + 'meetings/'+ userId);


  }

  addMeeting(meeting: Meeting,id : number) : Observable<any> {
    return this.http.post<Meeting>(this.rest+'meeting/'+id, meeting, httpOptions);
  }

  deleteCustomer (id : number): Observable<Meeting> {
    return this.http.delete<Meeting>(this.rest+'meeting/'+ `${id}`, httpOptions);
  }

  updateMeeting (meeting:Meeting): Observable<any> {
    return this.http.put(this.rest+'meeting/'+ `${meeting.id}`, meeting, httpOptions);
  }
  assignTask(mid : number, tid: number) : Observable<any>{
    console.log('Meeting and task Configured');
    return this.http.get<any>(this.rest + 'assignTask/'+  `${mid}/${tid}`);

  }
}
