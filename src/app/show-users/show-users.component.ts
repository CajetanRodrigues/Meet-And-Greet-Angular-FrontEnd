import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../Models/user";

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  private users: User[];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers() {
    return this.userService.getUsers()
      .subscribe(
        users => {
          console.log(users);
          this.users = users;
        }
      );

    console.log(this.users)
  }

}
