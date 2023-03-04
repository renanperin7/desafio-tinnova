import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly API = 'https://private-9d65b3-tinnova.apiary-mock.com/users'

  // private readonly API = 'https:/localhost:3000/person'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Person[]>(this.API)
    // return this.http.get<Person[]>(this.API)
    // .pipe(
    //   delay(1000)
    // )
  }

  getPeople() {
    return JSON.parse(localStorage.getItem("people") as string) as Person[]
    // return this.http.get<Person[]>(`${this.API}/${cpf}`).pipe(take(1))
  }

  postPerson(person: Person) {
    const people = this.getPeople()

    people.push(person)

    const peopleAdded = JSON.stringify(people)

    localStorage.setItem("people", peopleAdded)
    // return this.http.post(this.API, person).pipe(take(1))
  }

  editPerson(person: Person) {
    const people = this.getPeople()

    const updatedPeople = people?.map(personLoop => person.cpf === personLoop.cpf ? person : personLoop)

    localStorage.setItem("people", JSON.stringify(updatedPeople))
    // return this.http.put(`${this.API}/${person.cpf}`, person).pipe(take(1))
  }

  deletePerson(person: Person) {
    const people = this.getPeople()

    const filteredPeople = people.filter(personLoop => personLoop.cpf !== person.cpf)

    localStorage.setItem("people", JSON.stringify(filteredPeople))

    return filteredPeople
    // return this.http.delete(`${this.API}/${cpf}`).pipe(take(1))
  }
}
