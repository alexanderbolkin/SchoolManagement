import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { PageHeaderModule } from './../../shared';

// import { FormRoutingModule } from './form-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
                CommonModule, 
                GridRoutingModule, 
                PageHeaderModule,
                FormsModule, 
                NgbModule.forRoot(),
                ReactiveFormsModule
            ],

    declarations: [GridComponent]
})
export class GridModule {}
