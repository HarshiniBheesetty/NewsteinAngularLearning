import { Component, Input, OnInit } from "@angular/core";
import { Place } from "../../model/place";
import { Logger } from "../../utlility/logger";

@Component({
    selector: 'app-tourism',
    templateUrl: "./tourism.html"
})


export class AppTourism implements OnInit{

    //property
    @Input() public place: Place;
    
    

     //method
    public constructor(public logger : Logger) {
        
        this.logger.name = " Hello";
    }

    public ngOnInit(): void {
        this.logger.logInfo(this.place.name); 
        this.logger.logInfo(this.logger.name);

         this.place.name="Nandi Hills"
        
    }

    public updateAdress() : void{

    }

}