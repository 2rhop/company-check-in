import { NgModule } from '@angular/core';

import { PersonRegRoutingModule } from './person-reg-routing.module';
import { SharedModule } from '../common/shared/shared.module';

@NgModule({
    imports: [
        PersonRegRoutingModule,
        SharedModule
    ],
    declarations: [],
})
export class PersonRegModule { }