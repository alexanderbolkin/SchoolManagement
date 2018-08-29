import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { PageHeaderModule } from './../../shared'
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder, Validators, NgForm } from '@angular/forms';

@NgModule({
    imports:[
                CommonModule, 
                BlankPageRoutingModule,
                FormsModule,
                PageHeaderModule,
                TranslateModule,
                ReactiveFormsModule
                // ActivatedRoute,
                // Router, \
            ],
    declarations: [
                    BlankPageComponent,
                    EditComponent
                    ]
})
export class BlankPageModule {}
