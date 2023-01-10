import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  cars:string [] = ["BMW","TATA","TESLA","TOYOTA","VOLVO"]
  bikes:string [] = ["HONDA","PULSAR","BAJAJ","UNICORN","HERO"]

  isCar:boolean = true
  selection:string = ""

  showCars(){
  if (!this.isCar) this.isCar=!this.isCar
  }

  showBikes(){
    if (this.isCar) this.isCar=!this.isCar
  }

  itemclicked(val:any){
   this.selection= val
  }
}
