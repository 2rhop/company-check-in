import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ListComponent } from "./complements/pr-list/pr-list.component";
import { PrNavbarComponent } from './layouts/pr-navbar/pr-navbar.component';
import { PrFooterComponent } from './layouts/pr-footer/pr-footer.component';

//--
const complements = [
    ListComponent
]
//--
@NgModule({
    imports: [RouterModule, FormsModule,CommonModule],
    exports: [...complements],
    declarations: [...complements, PrNavbarComponent, PrFooterComponent],
    providers: []
})

export class SharedModule { }