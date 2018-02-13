import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { Person } from '../../../interfaces/person';
import { PERSON_DATA } from './person-data';


@Injectable()
export class PersonDataProxyService {

  constructor() { }

  getData(): Observable<Person[]> {
    return of(PERSON_DATA);
  }

}
