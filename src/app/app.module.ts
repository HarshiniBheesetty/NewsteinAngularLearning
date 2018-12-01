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
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    Bike,
    Foo1Component,
    Foo2Component,
    AppTourism,
    TestComponent
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

//Module
// Angular is a modular language.An angular application is a collection of individual modules
//Angular module is lines opf code that can be imported or exported.
//Every application has atleast one module i.e root-module(AppModule)
//Each Module is inturn made up of components and services.


//component
//component controlls the portion of view on the browser.
//Angular application will have atleast one component and i.e root component(AppComponent)
//All other components will be nested inside the root component.
//each component will have an HTML template to represent the view in the browser and the 
//class that controlls the logic of that particular view.

//Services
//is basically a class that contains a business logic of your application 
