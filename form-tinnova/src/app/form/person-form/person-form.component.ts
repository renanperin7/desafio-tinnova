import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
  form!: FormGroup

  isClicked = false;

  constructor() {}

  ngOnInit() {

  }

  register() {
  }
}
