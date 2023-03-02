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

  postPerson(person: Person) {
    return this.http.post(`${this.API}/localStorage/IndexedDB`, person)
  }
}
