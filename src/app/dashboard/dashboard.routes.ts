
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from "./componentes/main/main.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'parametrizacion',
        loadChildren: '../parametrizacion/parametrizacion.module#ParametrizacionModule'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutesModule { }
