import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent

    
  ],
  imports: [
    BrowserModule,
    RouterModule,    
    RouterModule.forRoot(AppRoutes,{preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
