import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonFormComponent } from './form/person-form/person-form.component';
import { PersonListComponent } from './form/person-list/person-list.component';

const routes: Routes = [
  { path: '',pathMatch: 'full' , component: PersonFormComponent},
  { path: 'lista', component: PersonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
