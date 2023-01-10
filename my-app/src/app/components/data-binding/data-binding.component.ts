import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
userName:string = "Bhushan"
age:number = 24

imagePath:string="../../../assets/images (3).jpeg"

name:string= "Hulk"

disabledInput:boolean= true

myName:string = ""

clickMe(){
  console.log('Button clicked!')
}

enabledInput(){
 this.disabledInput= false

}

showMsg(val:string) {
  alert(val)
}


}
