import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrMainPageComponent } from './pr-main-page/pr-main-page.component';
import { SharedModule } from '../../common/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [PrMainPageComponent]
})
export class MainModule { }
