import { Component, OnInit } from '@angular/core';

import { Registry } from '../../../common/interfaces/registry';
import { Person } from '../../../common/interfaces/person';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { PersonDataService, VALUE } from '../../../common/core/services/person-data/person-data.service';
import { RegistryDataService } from '../../../common/core/services/reg-data/registry-data.service';

@Component({
  selector: 'pr-main-page',
  templateUrl: './pr-main-page.component.html',
  styleUrls: ['./pr-main-page.component.css']
})
export class PrMainPageComponent implements OnInit {

  titles = ['Nombre', 'Hora'];
  entries: Registry[];
  personList: Person[];
  msg: string;
  title: string;
  class: string; time: Date;

  constructor(private person_service: PersonDataService, private reg_service: RegistryDataService) { }

  ngOnInit() {
    this.init();
  }

  handlePersonRegistry(p) {
    this.person_service.getPersonFromKey(p).subscribe(name => {
      if (name != VALUE) {
        this.title = 'Welcome: ';
        this.msg = name;
        this.class = 'success';
        this.entries.push({
          name: name,
          time: this.time.toString()
        })
        // this.init();
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
    this.entries = this.reg_service.getList_of_Registries();
  }


}
