import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { EditComponent } from './edit/edit.component';

// const routes: Routes = [
//     {
//         path: '', component: TablesComponent
//     }
// ];

const routes: Routes = [
    { path: '', component: TablesComponent},
    { path: 'edit/:id', component: EditComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
