import { Injectable } from '@angular/core';

import { PersonDataProxyService } from './person-data-proxy.service';
import { Person } from '../../../interfaces/person';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

export const VALUE: string = '';

@Injectable()
export class PersonDataService {

  constructor(private proxy: PersonDataProxyService) { }

  getPersonFromKey(k: string): Observable<string> {
    let ob: Observable<Person[]> = this.proxy.getData();

    return ob.map(persons => {
      return persons.filter(person => { return person.signature == k; })
    }).map(persons => {
      return persons.map(person => person.name)
    }).reduce((name, current) => name + current, VALUE);

  }

}
