import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FpComponent } from './components/fp/fp.component';
import { SpComponent } from './components/sp/sp.component';

@NgModule({
  declarations: [
    AppComponent,
    FpComponent,
    SpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
