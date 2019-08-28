import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './componentes/main/main.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from "./componentes/login/login.component";
import { RestoreComponent } from './restore/restore.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'auth', component: LoginComponent},
      {path: 'restore', component: RestoreComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutesModule {}
