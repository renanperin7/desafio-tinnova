import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  pessoas: Person[] = []

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.list().subscribe(res => this.pessoas = res)
  }
}
