import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder, Validators, NgForm } from '@angular/forms';
import {UserService} from '../../../user.service';
import {User} from '../../../school';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers:[UserService]
})
export class EditComponent implements OnInit 
{
  // users:User[]; 
  user: any = {};
  angForm: FormGroup;
  sendData: any;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService, 
              private fb: FormBuilder) {this.createForm();}

      
      createForm() 
      {
        this.angForm = this.fb.group({
              username: ['', Validators.required ],
              email: ['', Validators.required ],
              // password: ['', Validators.required ],
         });
      }

      updateUser(username, email) 
      {
        const id = this.route.snapshot.paramMap.get('id');
        this.userService.updateUser(username,email,id);
        this.router.navigate(['blank-page']);


        // this.route.params.subscribe(params => 
        // {
        //   this.userService.updateUser(username,email, params['id']);
        //   this.router.navigate(['blank-page']);
        // });

        // this.sendData = {
        //   id: this.route.snapshot.params['id'],
        //   email: this.angForm.value.email,
        //   username: this.angForm.value.name
        // }
        // this.userService.updateUser(this.sendData)
        //  .pipe(first())
        // .subscribe(data => {
        //   this.router.navigate(['blank-page']);
        // })
    }

    ngOnInit() 
    {
        const id = this.route.snapshot.paramMap.get('id');  // getting id -----function------//

        this.userService.editUser(id)
          .subscribe(res =>{
                            this.user =JSON.parse(res["_body"]);
                            this.angForm.get('username').setValue(this.user.username);
                            this.angForm.get('email').setValue(this.user.email);
                            }
                    );  
    }

}
