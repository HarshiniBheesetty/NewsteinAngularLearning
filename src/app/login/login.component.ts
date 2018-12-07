import { Component, OnInit } from '@angular/core';
import { Supporter } from './supporter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 //properties
  supporter:Supporter;
 

  //methods
  constructor() {
    this.supporter= new Supporter();
   }

  ngOnInit() {
  }
  
  public submitForm():void{
    console.log(this.supporter);
  }
}
