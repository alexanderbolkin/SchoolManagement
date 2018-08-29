import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { UserService} from '../user.service';
import { AlertService} from '../shared/services/alert.service';
import {User} from '../school';
import {AppComponent} from '../app.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {passValidator} from './custom-validators';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()],
    providers: [UserService,AppComponent,AlertService]
})
export class SignupComponent implements OnInit{

    users:User[];
    // user:User;
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    // rForm: FormGroup;
    // post: any;
    // username: string = '';
    // email: string = '';
    // password: string = '';
    // cnfpassword: string = '';

    // constructor(private userService: UserService ) {}

    // SignUp()
    // {
    //     const newUser ={
    //         username:this.username,
    //         email:this.email,
    //         password:this.password
    //     }
        
    //     this.userService.addUser(newUser)
        
    //     .subscribe(user=>{
    //         this.users.push(user);
    //         this.userService.getUsers()
    //         .subscribe(users => this.users = users);
    //     });
    // }
    // ngOnInit() {
    //     this.userService.getUsers()
    //     .subscribe(users => this.users =users);

    // }
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }
 
    ngOnInit() 
    {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
 
    // convenience getter for easy access to form fields
    get f() 
    { 
        return this.registerForm.controls; 
    }
  

    //===============register==================//
    onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.registerForm.invalid) 
        {
            return;
        }
        this.loading = true;

        this.userService.addUser(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    //this.router.navigate(['/login']);
                    this.router.navigateByUrl('dashboard');
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
