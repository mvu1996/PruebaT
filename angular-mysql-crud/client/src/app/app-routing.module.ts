import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormListComponent} from "./components/form-list/form-list.component"

const routes: Routes = [
  {
    path:'',
    redirectTo:'/ingresos',
    pathMatch: 'full'
  },
  {
    path: 'ingresos',
    component: FormListComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
