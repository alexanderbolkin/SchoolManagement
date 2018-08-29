import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module'; 
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({

    declarations: [
        FormComponent
    ],

    imports: [
                FormsModule,
                CommonModule, 
                FormRoutingModule,
                PageHeaderModule,
                NgbModule.forRoot(),
                ReactiveFormsModule
            ],

    providers: [],
})
export class FormModule {}
