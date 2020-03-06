import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ifprComponent } from './ifpr/ifpr.component';
import { tadsComponent } from './tads/tads.component';

@NgModule({
  declarations: [
    AppComponent, ifprComponent, tadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
