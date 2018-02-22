import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { Person } from '../../../interfaces/person';
import { PERSON_DATA } from './person-data';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';


@Injectable()
export class PersonDataProxyService {

  constructor(private http: Http) { }

  getData(): Observable<Person[]> {
    // return of(PERSON_DATA);
    return this.http.get(environment.api_url + 'person').map(res => res.json());
  }

}
