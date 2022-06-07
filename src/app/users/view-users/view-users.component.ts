import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/data/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(@Inject(forwardRef(() => UserService)) public userService : any, private route : Router) { }

  users = null;
  ngOnInit(): void {
    this.userService.retrieveAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }



}
