import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  pessoas: Person[] = []

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.formService.list().subscribe(res => this.pessoas = res)
  }
}
