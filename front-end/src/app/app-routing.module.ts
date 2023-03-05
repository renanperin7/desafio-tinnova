import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , component: PersonListComponent},
  { path: 'cadastro', component: PersonCreateComponent},
  { path: 'lista', component: PersonListComponent},
  { path: 'editar/:cpf', component: PersonEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
