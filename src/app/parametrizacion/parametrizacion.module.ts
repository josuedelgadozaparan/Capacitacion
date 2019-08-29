import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './componentes/main/main.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component';
import { ParametrizacionRoutesModule } from './parametrizacion.routes';



@NgModule({
  declarations: [MainComponent, VehiculosComponent],
  imports: [
    CommonModule,
    ParametrizacionRoutesModule
  ]
})
export class ParametrizacionModule { }
