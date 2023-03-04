import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Person } from './../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent {
  person!: Person;

  saving: boolean = false;

  submitted: boolean = false;

  @Input() formType: string = ""

  form = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    cpf: ['', Validators.required],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private route: Router
  ) {}

  ngOnInit() {
    if (this.route.url.split('/')[1] === 'editar') {
      const people = this.personService.getPeople();

      const cpfUrl = this.route.url.split('/')[2];

      const { name, cpf, phone, email } = people.find(
        (person) => person.cpf === cpfUrl
      ) as Person;

      this.form.patchValue({
        name,
        cpf,
        phone,
        email
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const novoCadastro: Person = {
        name: this.form.value.name as string,
        cpf: this.form.value.cpf as string,
        phone: this.form.value.phone as string,
        email: this.form.value.email as string,
      };

      if (this.route.url.split('/')[2] === 'editar') {
        this.personService.editPerson(novoCadastro);
      } else {
        this.personService.postPerson(novoCadastro);
      }
    }
  }
}
