import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attr-directives.component.html',
  styleUrls: ['./attr-directives.component.css']
})
export class AttrDirectivesComponent {

//property to be used with ngStyle
  myNgStyle = {
    color:"red"
  }

  //property to be used with ngStyle (Based on condition)
  flag = false;
  myNewNgStyle = {
    color:this.flag? "red":"greenyellow",
    backgroundcolor:this.flag? "cyan":"Black"
  }

  myNgClasses = {
"txtDanger":this.flag,
"txtSuccess":!this.flag,
"super":!this.flag,
  }
}
