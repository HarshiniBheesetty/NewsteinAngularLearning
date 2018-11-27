//import { Component } from '@angular/corng e';
import { Helper } from './model/helper';
import { Component } from '@angular/core';
import { Place } from './model/place';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Properties:
  public title: string;

  public helper: Helper;
  public x : number;
  public msg: string;
  public prime: string;
  public palen : string;
  public bengaluruPlace :Place;
  public mangalorePlace : Place;

  // Methods:
  public constructor() {
    this.title = "My game";
    this.helper = new Helper();

    this.x = Helper.sum(10, 60);
    this.msg = Helper.dummyMsg();
    this.prime = Helper.primeNum(197);
    this.palen = Helper.palendrome("abcdedcba");

    this.bengaluruPlace = new Place();
    this.mangalorePlace = new Place();
    this.mangalorePlace.name= "Mangalore"
  }

}
