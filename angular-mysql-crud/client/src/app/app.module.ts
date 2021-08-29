import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormComponent } from './components/form/form.component';
import { FormListComponent } from './components/form-list/form-list.component';

import {TazasService} from './services/tazas.service'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TazasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
