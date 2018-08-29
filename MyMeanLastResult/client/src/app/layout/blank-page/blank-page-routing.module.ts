import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlankPageComponent } from './blank-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './edit/edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder, Validators, NgForm } from '@angular/forms';
// const routes: Routes = [
//     {
//         path: 'edit', 
//         component: EditComponent,
//         // path: '',
//         // component: BlankPageComponent,
//         // children: [
//         //     //{ path: '', redirectTo: 'user/edit', pathMatch: 'prefix' },/:id
//         //     { path: 'edit', component: EditComponent },
//         // ]
//     }
// ];

const routes: Routes = [
    { path: '', component: BlankPageComponent},
    { path: 'edit/:id', component: EditComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        // BrowserAnimationsModule,
        // FormGroup,  FormBuilder, Validators, NgForm
    ],
    exports: [RouterModule]
})
export class BlankPageRoutingModule {}
