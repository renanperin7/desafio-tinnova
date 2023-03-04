import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonFormComponent } from './person/person-form/person-form.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , component: PersonListComponent},
  { path: 'cadastro', component: PersonFormComponent},
  { path: 'lista', component: PersonListComponent},
  { path: 'editar', component: PersonEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
