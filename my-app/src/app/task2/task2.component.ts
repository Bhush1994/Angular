import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
 states:string [] = ["Maharashtra","Gujarat","Goa","Punjab"]
 city:string [] = ["Mumbai","Surat","Panji","Amritsar"]

 isstates:boolean = true
selection:string = ""
showState(){
  if (!this.isstates) this.isstates=!this.isstates
}

showCity(){
  if (this.isstates) this.isstates=!this.isstates
}
itemclicked(val:any){
  this.selection= val
 }
}
