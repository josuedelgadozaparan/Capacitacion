import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './componentes/main/main.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos.component';
import { ParametrizacionRoutesModule } from './parametrizacion.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VehiculosModalComponent } from './modales/vehiculos-modal/vehiculos-modal.component';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [MainComponent, VehiculosComponent, VehiculosModalComponent],
  imports: [
    CommonModule,
    NgbModule,
    TableModule,
    ReactiveFormsModule,
    ParametrizacionRoutesModule
  ],
  entryComponents:[

    VehiculosModalComponent

  ]
})
export class ParametrizacionModule { }
