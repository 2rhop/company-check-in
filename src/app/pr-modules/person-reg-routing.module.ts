import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrMainPageComponent } from './pr-main-page/pr-main-page.component';
import { PageNotFoundComponent } from '../common/shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: PrMainPageComponent
    // , children: [
    //   { path: ':id', component: OtherComponent }
    // ]
  },
  { path: '**', component:  PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRegRoutingModule { }
