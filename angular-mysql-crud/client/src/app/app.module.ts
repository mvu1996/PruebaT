import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AlmacenListComponent } from './components/almacen-list/almacen-list.component';
import { AlmacenFormComponent } from './components/almacen-form/almacen-form.component';

import {TazasService} from './services/tazas.service'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AlmacenListComponent,
    AlmacenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TazasService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
