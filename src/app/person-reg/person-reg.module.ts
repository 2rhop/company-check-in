import { NgModule } from '@angular/core';

import { PersonRegRoutingModule } from './person-reg-routing.module';
import { SharedModule } from '../common/shared/shared.module';
import { PrMainPageComponent } from './pr-main-page/pr-main-page.component';

@NgModule({
    imports: [
        PersonRegRoutingModule,
        SharedModule
    ],
    declarations: [PrMainPageComponent],
})
export class PersonRegModule { }