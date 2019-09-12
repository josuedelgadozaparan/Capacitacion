import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginRoutesModule } from './login.routes';
import { RestoreComponent } from './restore/restore.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';



@NgModule({
  declarations: [MainComponent, LoginComponent, RestoreComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutesModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
