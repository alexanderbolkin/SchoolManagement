import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';
import { PageHeaderModule } from '../shared';
@NgModule({
  imports: [
            CommonModule,
            SignupRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            PageHeaderModule
          ],
  declarations: [
              SignupComponent, 
              // AlertComponent
                ]
})
export class SignupModule { }
