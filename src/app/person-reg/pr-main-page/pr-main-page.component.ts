import { Component, OnInit } from '@angular/core';

import { Registry } from '../../common/interfaces/registry';
import { PersonDataService } from '../../common/core/services/person-data/person-data.service';

@Component({
  selector: 'pr-main-page',
  templateUrl: './pr-main-page.component.html',
  styleUrls: ['./pr-main-page.component.css']
})
export class PrMainPageComponent implements OnInit {

  titles = ['Nombre', 'Hora'];
  entries: Registry[];

  constructor() { }

  ngOnInit() {
  }

}
