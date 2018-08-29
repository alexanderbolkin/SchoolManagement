import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,NgbModule,FormsModule ,ReactiveFormsModule,LoginRoutingModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
