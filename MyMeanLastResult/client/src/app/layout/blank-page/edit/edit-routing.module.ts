import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
    {
        path: '',
        component: EditComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [RouterModule]
})
export class  EditRoutingModule {}
