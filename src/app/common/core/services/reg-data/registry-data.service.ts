import { Injectable } from '@angular/core';
import { Registry } from '../../../interfaces/registry';
import { RegistryDataProxyService } from './registry-data-proxy.service';

@Injectable()
export class RegistryDataService {

  data: Registry[];

  constructor(private proxy: RegistryDataProxyService) { }

  getList_of_Registries(): Registry[] {
    this.data = [];
    this.proxy.getData().subscribe(res => {
      res.forEach(e => {
        this.data.push(e);
      })
    }, error => {
      console.log('error: ' + error)
    })
    return this.data;
  }

  addRegistry(r:Registry){
    this.proxy.setRegistry(r);
  }

}
