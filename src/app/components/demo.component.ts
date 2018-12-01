import { Component, Input } from "@angular/core";

@Component({
    selector: 'jhsdfj',
    templateUrl: "./demo.html"
})
export class Bike {

    //properties:
    public name: string;
    @Input() public newTitle: string;
    public check: boolean;
    public classStrengthList: number[];


    //methods:
    public constructor() {
        this.name = "Pulsar";
        this.initializeClassStrength();

    }

    public updateName(newName: string) {
        this.name = newName;

        console.log(newName + " I just now appeared!");
    }

    public updateCheck() {
        this.check = !this.check;

    }

    private initializeClassStrength(): void {
        this.classStrengthList = [];


        for (let i = 0; i < 10; i++)
            this.classStrengthList[i] = Math.floor((Math.random() * 50 + 1));

    }

    public someHandler(someNum: number): void {

        alert(someNum);

    }
}