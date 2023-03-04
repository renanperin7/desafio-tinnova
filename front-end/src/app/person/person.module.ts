import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    PersonFormComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  declarations: [
    PersonFormComponent,
    PersonListComponent,
    PersonEditComponent
  ]
})
export class PersonModule { }
