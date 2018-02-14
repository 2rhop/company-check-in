import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { PrListComponent } from "./complements/pr-list/pr-list.component";
import { PrNavbarComponent } from './layouts/pr-navbar/pr-navbar.component';
import { PrFooterComponent } from './layouts/pr-footer/pr-footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

//--
const complements = [
    PrListComponent, PrNavbarComponent, PrFooterComponent, PageNotFoundComponent
]
//--
@NgModule({
    imports: [RouterModule, FormsModule, CommonModule, CoreModule],
    exports: [...complements],
    declarations: [...complements],
    providers: []
})

export class SharedModule { }