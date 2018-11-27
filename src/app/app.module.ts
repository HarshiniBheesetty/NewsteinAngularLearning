import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection';
import { Bike } from './components/demo.component';
import { Foo1Component } from './components/foo1/foo1.component';
import { Foo2Component } from './components/foo2/foo2.component';
import { AppTourism } from './tourism/tourism';

@NgModule({
  declarations: [
    AppComponent,
    Bike,
    Foo1Component,
    Foo2Component,
    AppTourism
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
