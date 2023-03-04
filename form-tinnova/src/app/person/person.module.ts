import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonEditComponent } from './person-edit/person-edit.component';

@NgModule({
  declarations: [
    PersonFormComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  exports: [
    PersonFormComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PersonModule { }
