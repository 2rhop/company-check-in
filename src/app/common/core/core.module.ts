import { NgModule } from '@angular/core';

import { PersonDataProxyService } from '../core/services/person-data/person-data-proxy.service';
import { PersonDataService } from '../core/services/person-data/person-data.service';

@NgModule({
  imports: [],
  providers: [PersonDataProxyService, PersonDataService]
})
export class CoreModule { }
