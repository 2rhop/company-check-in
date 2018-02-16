import { Injectable } from '@angular/core';
import { Registry } from '../../../interfaces/registry';
import { RegistryDataProxyService } from './registry-data-proxy.service';

@Injectable()
export class RegistryDataService {

  constructor(private proxy: RegistryDataProxyService) { }

  getList_of_Registries(): Registry[] {
    let data: Registry[];
    this.proxy.getData().subscribe(res => {
      data = res;
    })
    return data;
  }

  addRegistry(r:Registry){
    this.proxy.setRegistry(r);
  }

}
