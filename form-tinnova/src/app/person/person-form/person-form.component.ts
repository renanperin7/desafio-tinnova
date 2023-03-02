import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {

  form!: FormGroup

  person!: Person

  constructor(
    private fb: FormBuilder,
    private personService: PersonService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      cpf: [null, Validators.required],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    this.personService.postPerson(this.person).subscribe(dados =>
      {
        console.log(dados)
        this.form.reset()
      })
  }
}
