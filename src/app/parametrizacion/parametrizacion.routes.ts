import {MainComponent} from "./componentes/main/main.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {VehiculosComponent} from "./componentes/vehiculos/vehiculos.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'home', component: VehiculosComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutesModule {}
