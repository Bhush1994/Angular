import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //input for the child component
  @Input() pData:any

  //output from the child component
//for this we need to use have Event Emitter
  @Output() emitterobj = new EventEmitter()

  getMessage(val:any) {
    console.log(val)
    this.emitterobj.emit(val)
  }

  
}
