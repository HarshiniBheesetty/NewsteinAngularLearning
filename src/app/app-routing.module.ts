import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection';
import { Bike } from './components/demo.component';
import { Foo1Component } from './components/foo1/foo1.component';
import { Foo2Component } from './components/foo2/foo2.component';
import { AppTourism } from './tourism/tourism';

const routes: Routes = [

  {path: 'demo',component:Bike},
  {path:'foofirst',component: Foo1Component},
  {path:"foosecond",component:Foo2Component},
  {path:"tourism",component:AppTourism}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
