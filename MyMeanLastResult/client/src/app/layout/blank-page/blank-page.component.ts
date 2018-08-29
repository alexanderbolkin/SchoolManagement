import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../school';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder, Validators, NgForm } from '@angular/forms';
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    providers:[UserService]
})
export class BlankPageComponent implements OnInit {

    users:User[]; //on init(formatted data will store in here)
    user:User;
    
    username: String;
    email: String;
    password: String;
  
    constructor(private userService: UserService) {}

    // ngOnInit() {}
    addUser()
    {
      const newUser ={
        username:this.username,
        email:this.email,
        password:this.password
      }
      this.userService.addUser(newUser)
        .subscribe(users=>{
                        this.users.push(users);

      this.userService.getUsers()
        .subscribe(users => this.users = users);
      });
    }
    
  
    deleleteUser(id:any)
    {
      var users = this.users;
      this.userService.deleteUser(id)
        .subscribe(data=>{
          if(data.n==1)
          {
            for(var i=0;i<users.length;i++)
            {
              if(users[i]._id == id)
              {
                users.splice(i,1);
              }
            }
          }
        });
    }
  
    ngOnInit() {
      this.userService.getUsers() //getting data will send to viewpage  by using subscribe.(onInit is formating function)
        .subscribe(users => this.users = users);
    }
}
