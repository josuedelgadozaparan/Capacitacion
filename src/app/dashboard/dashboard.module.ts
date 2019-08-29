import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutesModule } from './dashboard.routes';
import { MainComponent } from './componentes/main/main.component';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DashboardRoutesModule
  ]
})
export class DashboardModule { }
