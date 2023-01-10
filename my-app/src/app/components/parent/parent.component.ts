import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

   data:any
   childData:any
   
  getMessage(val:any) {
    console.log(val)
    this.data= val
  }
}
