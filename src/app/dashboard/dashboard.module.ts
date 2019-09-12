import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutesModule } from './dashboard.routes';
import { MainComponent } from './componentes/main/main.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';



@NgModule({
  declarations: [MainComponent, SidebarComponent, ContenidoComponent],
  imports: [
    CommonModule,
    DashboardRoutesModule
  ]
})
export class DashboardModule { }
