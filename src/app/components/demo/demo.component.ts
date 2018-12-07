import { Component, Input, OnInit } from "@angular/core";
import { Logger } from "../../utlility/logger";
import { DemoService } from "../../services/demo.service";

@Component({
    selector: 'demo-app',
    templateUrl: "./demo.html"
})
export class Bike implements OnInit {

    //properties:
    public name: string;
    @Input() public newTitle: string;
    public check: boolean;
    public classStrengthList: number[];

    //methods:
    public constructor(private logger : Logger ,private demoService :DemoService) {
        this.name = "Pulsar";
        this.initializeClassStrength();
        console.log("Hello1");
        
    }

    public ngOnInit() {

        this.demoService.demoGetRequest().subscribe(
            res => { 
                console.log("Data fetching is successful");
                this.logger.logInfo(res);
            }, 
            error => {
                console.log("dwnfghewjf");
                this.logger.logInfo(error); 
                console.log("data fetching failed");
            });
    }
 
    public updateName(newName: string) {
        this.name = newName;

        console.log(newName + " I just now appeared!");
    }

    public updateCheck() {
        this.logger.logWarning("This button is clicked");
        this.check = !this.check;
        this.logger.logInfo("In DMEO " + this.logger.name);
       

    }

    private initializeClassStrength(): void {
        this.classStrengthList = [];


        for (let i = 0; i < 2; i++)
            this.classStrengthList[i] = Math.floor((Math.random() * 50 + 1));

    }

    public someHandler(someNum: number): void {

        alert(someNum);

    }
}