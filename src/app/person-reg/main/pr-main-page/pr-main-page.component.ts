import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';

import { Registry } from '../../../common/interfaces/registry';
import { Person } from '../../../common/interfaces/person';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { PersonDataService, VALUE } from '../../../common/core/services/person-data/person-data.service';
import { RegistryDataService } from '../../../common/core/services/reg-data/registry-data.service';
import { Subscription } from 'rxjs';
import { ReversePipe } from '../../../common/core/pipes/reverse.pipe';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MessageService } from '../../../common/core/services/messages/message.service';
import { CustomToastOptions } from '../../../common/core/services/messages/custom-toast-options';

@Component({
  selector: 'pr-main-page',
  templateUrl: './pr-main-page.component.html',
  styleUrls: ['./pr-main-page.component.css'],
  providers: [ReversePipe]

})
export class PrMainPageComponent implements OnInit, OnDestroy {

  titles = ['Nombre', 'Hora'];
  entries: Registry[];
  personList: Person[];
  time: Date; timer_color: string;
  _subscribe_persons: Subscription;
  _subscribe_registries: Subscription;

  _timeStart: Date;
  _timeEnd: Date;


  constructor(private person_service: PersonDataService,
    private reg_service: RegistryDataService,
    private reverse: ReversePipe, public toast_service: MessageService, private vcr: ViewContainerRef) {
  }

  ngOnInit() {
    this.init();
    this.setDateRange();
  }

  setDateRange(): void {
    this._timeStart = new Date(Date.now())
    this._timeEnd = new Date(Date.now());
    this._timeStart.setHours(8, 15, 0);
    this._timeEnd.setHours(16, 30, 0);
  }

  handlePersonRegistry(p) {
    if (this.canSign()) {
      this._subscribe_persons = this.person_service.getPersonFromKey(p).subscribe(name => {
        if (name != VALUE) {
          this.reg_service.addRegistry({
            name: name,
            time: this.time.toString()
          }).subscribe(res => {
            this.init();
            this.toast_service.showSuccess('Welcome: ' + name.toUpperCase(), this.vcr);
          },
            error => {
              console.log('error: ' + error);
            });
        } else {
          this.toast_service.showError('Incorrect Person', this.vcr);
        }
      });
    } else {
      this.toast_service.showInfo('You can not sign in this momment', this.vcr,
        <CustomToastOptions>{ showCloseButton: true });
    }
  }

  getTimer(t: Date) {
    this.time = t;
    if (this.canSign()) {
      this.timer_color = 'success';
    } else {
      this.timer_color = 'danger';
    }
  }

  init() {
    this._subscribe_registries = this.reg_service.getList_of_Registries().subscribe(res => {
      this.entries = res;
      this.reverse.transform(this.entries);
    });
  }

  ngOnDestroy() {
    this._subscribe_registries.unsubscribe();
    this._subscribe_persons.unsubscribe();
  }

  canSign(): boolean {
    return (this.time < this._timeStart) || (this.time > this._timeEnd);
  }

}
