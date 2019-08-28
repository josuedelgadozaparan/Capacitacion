import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginRoutesModule } from './login.routes';
import { RestoreComponent } from './restore/restore.component';



@NgModule({
  declarations: [MainComponent, LoginComponent, RestoreComponent],
  imports: [
    CommonModule,
    LoginRoutesModule
  ]
})
export class LoginModule { }
