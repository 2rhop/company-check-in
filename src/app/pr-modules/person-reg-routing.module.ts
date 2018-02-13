import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrMainPageComponent } from './pr-main-page/pr-main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: PrMainPageComponent
    // , children: [
    //   { path: ':id', component: OtherComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRegRoutingModule { }
