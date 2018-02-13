import { Injectable } from '@angular/core';

import { PersonDataProxyService } from './person-data-proxy.service';
import { Person } from '../../../interfaces/person';

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

}
