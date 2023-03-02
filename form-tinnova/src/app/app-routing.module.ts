import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonFormComponent } from './person/person-form/person-form.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , component: HomeComponent},
  { path: 'cadastro', component: PersonFormComponent},
  { path: 'lista', component: PersonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
