import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  flag:boolean = true         //true then show the directive,false then hide the directives/  

  myVal:boolean = false

  fruits:string [] = ["Apple", "Banana", "Mango", "Graps","Orange"]
  
  myChoice:string = "Orange"
}
