import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './common/shared/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', loadChildren: 'app/person-reg/person-reg.module#PersonRegModule' },
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
