import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Registry } from '../../../interfaces/registry';
import { of } from 'rxjs/observable/of';
import { REGISTRY_DATA } from './registry-data';
import { Http, Response } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class RegistryDataProxyService {

  url: string;

  constructor(private http: Http) {
    this.url = environment.api_url + 'registries';
  }

  getData(): Observable<Registry[]> {
    // return of(REGISTRY_DATA);
    return this.http.get(this.url).map(res => res.json());
  }

  setRegistry(r: Registry) :Observable<Response>{
    // REGISTRY_DATA.push(r);
    return this.http.post(this.url, r);
  }

}
