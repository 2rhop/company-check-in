import { Injectable } from '@angular/core';

import { PersonDataProxyService } from './person-data-proxy.service';
import { Person } from '../../../interfaces/person';

export const VALUE: string = 'none';

@Injectable()
export class PersonDataService {

  constructor(private proxy: PersonDataProxyService) { }

  getList_of_Persons(): Person[] {
    let data;
    this.proxy.getData().subscribe(res => {
      data = res;
    })
    return data;
  }

  getPersonFromKey(k: string): string {
    let list: Person[] = this.getList_of_Persons();
    let p = VALUE;
    list.forEach(element => {
      if (element.signature == k) {
        p = element.name
      }
    });
    return p;
  }

}
