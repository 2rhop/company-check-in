import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PrListComponent } from "./complements/pr-list/pr-list.component";
import { PrNavbarComponent } from './layouts/pr-navbar/pr-navbar.component';
import { PrFooterComponent } from './layouts/pr-footer/pr-footer.component';

//--
const complements = [
    PrListComponent, PrNavbarComponent, PrFooterComponent
]
//--
@NgModule({
    imports: [RouterModule, FormsModule, CommonModule],
    exports: [...complements],
    declarations: [...complements],
    providers: []
})

export class SharedModule { }