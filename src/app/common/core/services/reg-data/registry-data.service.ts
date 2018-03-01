import { Injectable } from '@angular/core';
import { Registry } from '../../../interfaces/registry';
import { RegistryDataProxyService } from './registry-data-proxy.service';
import { Observable } from "rxjs/Observable";
import { Response } from '@angular/http';

@Injectable()
export class RegistryDataService {

  constructor(private proxy: RegistryDataProxyService) { }

  getList_of_AllRegistries(): Observable<Registry[]> {
    return this.proxy.getData();
  }

  getList_of_TodayRegistries(): Observable<Registry[]> {
    let data: Observable<Registry[]> = this.proxy.getData();

    return data.map(reg => {
      return reg.filter(fil => {
        let date: Date = new Date(fil.time);
        let now: Date = new Date(Date.now());
        return date.getDate() == now.getDate() &&
          date.getMonth() == now.getMonth() &&
          date.getFullYear() == now.getFullYear();
      })
    })
  }

  isSignedIn(name: string): Observable<string> {
    let regs: Observable<Registry[]> = this.getList_of_TodayRegistries();
    return regs.map(res => {
      return res.filter(filt => {
        return filt.name == name;
      })
    }).reduce((acc, current) => acc + current, '');
  }

  addRegistry(r: Registry): Observable<Response> {
    return this.proxy.setRegistry(r);
  }

}
