import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from "./common/shared/shared.module";
import { PersonRegModule } from './person-reg/person-reg.module';
import { AppRoutingModule } from './app-routing.module';
import {ToastModule} from 'ng2-toastr/ng2-toastr';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, ToastModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
