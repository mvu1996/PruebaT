import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlmacenListComponent} from "./components/almacen-list/almacen-list.component"
const routes: Routes = [
  {
    path:'',//ruta inicial
    redirectTo: '/ingresos',
    pathMatch:'full'
  },
  {
    path: 'ingresos',
    component: AlmacenListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
