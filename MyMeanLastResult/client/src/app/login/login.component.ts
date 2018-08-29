import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../shared/services/alert.service';
import { AuthenticationService } from '../shared/services/authentication.service'
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    invalidLogin: boolean = false;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}
 
        ngOnInit() 
        {
            this.loginForm = this.formBuilder.group({
                email: ['', Validators.required],
                password: ['', Validators.required]
            });
     
            // reset login status
            this.authenticationService.logout();
     
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
     
        // convenience getter for easy access to form fields
        get f() { return this.loginForm.controls; }
     
        onSubmit() {
            this.submitted = true;
     
            // stop here if form is invalid
            if (this.loginForm.invalid) 
            {
                return;
            }
     
            //this.loading = true;

            // this.authenticationService.login(this.f.email.value, this.f.password.value)
            //     .pipe(first())
            //     .subscribe(
            //                 data => {
            //                     // this.router.navigate([this.returnUrl]);
            //                     this.router.navigateByUrl('dashboard');
            //                 },
            //                 error => {
            //                     this.alertService.error(error);
            //                     this.loading = false;
            //                 });


            if(this.loginForm.controls.email.value == 'wasilioleg@gmail.com' && this.loginForm.controls.password.value == 'password') 
            {
                // this.router.navigate(['dashboard']);
                this.router.navigateByUrl('blank-page');
            }
            else 
            {
              this.invalidLogin = true;
            }
          }
        }
   

    // ngOnInit() {}

    // logIn() {
    //     if(this.username == "admin" && this.password=="12345")
    //     {
    //         alert("Loged in successfully")

    //         this.router.navigateByUrl('blank-page');
    //     }
    //     else{
    //         alert("Invalid login")
    //     }
    //     // localStorage.setItem('isLoggedin', 'true');
    // }
//}
