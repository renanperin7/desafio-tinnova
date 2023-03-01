import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';



@NgModule({
  declarations: [
    PersonFormComponent,
    PersonListComponent
  ],
exports: [
    PersonFormComponent,
    PersonListComponent
],
imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
]
})
export class FormModule { }
