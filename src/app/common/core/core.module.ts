import { NgModule } from '@angular/core';

import { PersonDataProxyService } from '../core/services/person-data/person-data-proxy.service';
import { PersonDataService } from '../core/services/person-data/person-data.service';
import { RegistryDataProxyService } from './services/reg-data/registry-data-proxy.service';
import { RegistryDataService } from './services/reg-data/registry-data.service';

@NgModule({
  imports: [],
  providers: [PersonDataProxyService, PersonDataService,
    RegistryDataProxyService, RegistryDataService]
})
export class CoreModule { }
