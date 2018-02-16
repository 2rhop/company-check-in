import { Component, OnInit, Input } from "@angular/core";

import { Registry } from "../../../interfaces/registry";

@Component({
    selector: `pr-list`,
    templateUrl: './pr-list.component.html',
    styleUrls: ['./pr-list.component.css']
})

export class PrListComponent implements OnInit {

    @Input() registries: Registry[];
    @Input() titles_array: string[];

    constructor() { }

    ngOnInit() { }
}