import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {

  people: Person[] = []

  constructor(
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.onRefresh()
  }

  onRefresh() {
    this.people = this.personService.getPeople()
  }

  editPerson(cpf: string) {
    this.router.navigate(['editar', cpf])
  }

  deletePerson(person: Person) {
    this.people = this.personService.deletePerson(person)
  }
}
