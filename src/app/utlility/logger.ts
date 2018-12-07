import { Injectable } from "@angular/core";

@Injectable()
export class Logger {

    // properties
     public name: string;

    //methods
    public constructor() {

    }

    public logError(msg: string): void {
        console.error(msg);
    }

    public logWarning(msg: string): void {
        console.warn(msg);
    }

    public logInfo(msg: string): void {
        console.info(msg);
    }

}