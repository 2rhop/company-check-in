import { NgModule } from '@angular/core';

import { PersonDataProxyService } from '../core/services/person-data/person-data-proxy.service';
import { PersonDataService } from '../core/services/person-data/person-data.service';
import { RegistryDataProxyService } from './services/reg-data/registry-data-proxy.service';
import { RegistryDataService } from './services/reg-data/registry-data.service';
import { ClockService } from './services/clock.service';
import { HttpModule, Http } from '@angular/http';
import { ReversePipe } from './pipes/reverse.pipe';
import { MessageService } from './services/messages/message.service';
import { ToastOptions } from 'ng2-toastr';
import { CustomToastOptions } from './services/messages/custom-toast-options';
import { ToastModule } from 'ng2-toastr';

@NgModule({
  imports: [HttpModule,ToastModule.forRoot()],
  providers: [PersonDataProxyService, PersonDataService,
    RegistryDataProxyService, RegistryDataService, ClockService,
    ReversePipe,  MessageService,
    { provide: ToastOptions, useClass: CustomToastOptions },
  ]
})
export class CoreModule { }
