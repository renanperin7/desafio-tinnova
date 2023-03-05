import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { PersonCreateComponent } from './person-create/person-create.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [
    PersonFormComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonCreateComponent
  ],
  declarations: [
    PersonFormComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonCreateComponent
  ],
  providers: [provideNgxMask()]
})
export class PersonModule { }
