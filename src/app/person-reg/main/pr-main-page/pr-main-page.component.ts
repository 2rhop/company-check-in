import { Component, OnInit, OnDestroy } from '@angular/core';

import { Registry } from '../../../common/interfaces/registry';
import { Person } from '../../../common/interfaces/person';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { PersonDataService, VALUE } from '../../../common/core/services/person-data/person-data.service';
import { RegistryDataService } from '../../../common/core/services/reg-data/registry-data.service';
import { Subscription } from 'rxjs';
import { ReversePipe } from '../../../common/core/pipes/reverse.pipe';

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
  msg: string;
  title: string;
  class: string; time: Date;
  _subscribe_persons: Subscription;
  _subscribe_registries: Subscription;

  constructor(private person_service: PersonDataService,
    private reg_service: RegistryDataService,
    private reverse: ReversePipe) { }

  ngOnInit() {
    this.init();
  }

  handlePersonRegistry(p) {
    this._subscribe_persons = this.person_service.getPersonFromKey(p).subscribe(name => {
      if (name != VALUE) {
        this.title = 'Welcome: ';
        this.msg = name;
        this.class = 'success';
        this.reg_service.addRegistry({
          name: name,
          time: this.time.toString()
        }).subscribe(res => {
          this.init();
          console.log('response: ' + res.status);
        },
          error => {
            console.log('error: ' + error);
          });
      } else {
        this.msg = '';
        this.title = 'Incorrect Person'.toUpperCase();
        this.class = 'danger';
      }
    });

  }

  getTimer(t: Date) {
    this.time = t;
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


}
