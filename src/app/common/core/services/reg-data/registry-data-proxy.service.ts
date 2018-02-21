import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Registry } from '../../../interfaces/registry';
import { of } from 'rxjs/observable/of';
import { REGISTRY_DATA } from './registry-data';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class RegistryDataProxyService {

  constructor(private http:Http) { }

  getData(): Observable<Registry[]> {
    // return of(REGISTRY_DATA);
    return this.http.get(environment.api_url + 'registries').map(res => res.json());
  }

  setRegistry(r: Registry) {
    REGISTRY_DATA.push(r);
  }

}
