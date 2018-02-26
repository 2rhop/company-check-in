import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { PrListComponent } from "./complements/pr-list/pr-list.component";
import { PrNavbarComponent } from './layouts/pr-navbar/pr-navbar.component';
import { PrFooterComponent } from './layouts/pr-footer/pr-footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PrSignFormComponent } from './complements/pr-sign-form/pr-sign-form.component';
import { PrTimerComponent } from './complements/pr-timer/pr-timer.component';
import { PrImageBoxComponent } from './complements/pr-image-box/pr-image-box.component';
import { ToastModule } from "ng2-toastr";

//--
const complements = [
    PrListComponent, PrNavbarComponent,
    PrFooterComponent, PageNotFoundComponent,
    PrSignFormComponent, PrTimerComponent,
    PrImageBoxComponent
]
//--
@NgModule({
    imports: [RouterModule, FormsModule, CommonModule, CoreModule,ToastModule.forRoot()],
    exports: [...complements],
    declarations: [...complements],
    providers: []
})

export class SharedModule { }