import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Registry } from '../../../interfaces/registry';
import { of } from 'rxjs/observable/of';
import { REGISTRY_DATA } from './registry-data';

@Injectable()
export class RegistryDataProxyService {

  constructor() { }

  getData(): Observable<Registry[]> {
    return of(REGISTRY_DATA);
  }

  setRegistry(r: Registry) {
    REGISTRY_DATA.push(r);
  }

}
