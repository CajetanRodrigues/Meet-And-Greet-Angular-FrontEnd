import {EventEmitter, Injectable, Output} from '@angular/core';
import {Meeting} from "./Models/meeting";
import {Observable} from "rxjs";
import {User} from "./Models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "./Models/task";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //@Output() userData : EventEmitter<User> = new EventEmitter<User>();
  public userData : User;
  private rest = 'http://localhost:1234/rest/';  // URL to web api
  user = new EventEmitter<User>();
  userId : number;
  userStatus=  'offline';
  constructor(private http: HttpClient) { }
  addUser(user: any) : Observable<any> {
    //this.http.post<User>(this.rest+'user', user, httpOptions).subscribe(user => console.log(user));
    return this.http.post<any>(this.rest+'user', user, httpOptions);
  }
  validateUser(user:User) : Observable<User> {
   // this.http.post<User>(this.rest+'checkcredentials',user, httpOptions)
     // .subscribe(user => console.log('User Returned :' + JSON.stringify(user)));
    return this.http.post<User>(this.rest+'checkcredentials',user, httpOptions);
    // inside post<> angle brackets we put the returned expression type.
  }
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.rest+'users')
  }
  getUser(id : number) : Observable<User> {

    return this.http.get<User>(this.rest + 'user/' +id);


  }
  deleteUser (id : number): Observable<User> {
    return this.http.delete<User>(this.rest+'user/'+ `${id}`, httpOptions);
  }

  updateUser (user:User): Observable<User> {
    return this.http.put<User>(this.rest+'user/'+ `${user.id}`, user, httpOptions);
  }

  getIdFromEmail(email : string) : Observable<User> {
    // console.log('Service : Id fetched from data base = '+ JSON.stringify(this.http.get<User>(this.rest + 'user/getId/'+email)));
    return this.http.get<User>('http://localhost:1234/rest/getId/{email}?email=rigrodtan%40gmail.com');

  }
}
