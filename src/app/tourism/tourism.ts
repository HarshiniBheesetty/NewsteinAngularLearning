import { Component, Input } from "@angular/core";
import { Place } from "../model/place";

@Component({
    selector: 'app-tourism',
    templateUrl: "./tourism.html"
})


export class AppTourism {
    //property
    @Input() public place: Place;
    

     //method
    public constructor() {
        this.place = new Place();
    }

    public updateAdress() : void{

    }

}