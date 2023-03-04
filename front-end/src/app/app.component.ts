import { Component } from '@angular/core';

import { Person } from './person/person';
import { PersonService } from './person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';

  constructor(private personService: PersonService) {}

  ngOnInit() {
    if(!localStorage.getItem("people")) {
      this.personService.list().subscribe(res => {
        const formattedRes = JSON.stringify(res)
        localStorage.setItem("people", formattedRes)
      })
    }
  }
}
