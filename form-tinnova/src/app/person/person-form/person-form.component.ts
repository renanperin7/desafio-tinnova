import { Person } from './../person';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {

  person!: Person

  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    cpf: ["", Validators.required],
    phone: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]]
  })

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private route: Router
  ) {}

  ngOnInit() {
    if(this.route.url.split('/')[2] === 'editar') {}
  }

  cadastrar() {
    this.personService.postPerson(this.person)
  }
}
