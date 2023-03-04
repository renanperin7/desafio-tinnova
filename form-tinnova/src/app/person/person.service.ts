import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly API = 'https://private-9d65b3-tinnova.apiary-mock.com/users'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Person[]>(this.API)
  }

  getPeople() {
    return JSON.parse(localStorage.getItem("people") as string) as Person[]
  }

  postPerson(person: Person) {
    const people = this.getPeople()

    people.push(person)

    localStorage.setItem("people", JSON.stringify(people))
  }

  editPerson(person: Person) {
    const people = this.getPeople()

    const updatedPeople = people.map(personLoop => person.cpf === personLoop.cpf ? person : personLoop)

    localStorage.setItem("people", JSON.stringify(updatedPeople))
  }

  deletePerson(person: Person) {
    const people = this.getPeople()

    const filteredPeople = people.filter(personLoop => personLoop.cpf !== person.cpf)

    localStorage.setItem("people", JSON.stringify(filteredPeople))
  }
}
