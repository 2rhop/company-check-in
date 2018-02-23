import { Injectable } from '@angular/core';
import { Registry } from '../../../interfaces/registry';
import { RegistryDataProxyService } from './registry-data-proxy.service';
import { Observable } from "rxjs/Observable";
import { Response } from '@angular/http';

@Injectable()
export class RegistryDataService {

  constructor(private proxy: RegistryDataProxyService) { }

  getList_of_Registries(): Observable<Registry[]> {
    return this.proxy.getData();
  }

  addRegistry(r: Registry): Observable<Response> {
    return this.proxy.setRegistry(r);
  }

}
