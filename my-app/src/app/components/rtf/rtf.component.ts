import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mycourses, regxName } from 'src/app/shared/common-data/constants';
@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class RtfComponent implements OnInit {

empData: any
// courses:string[]=['Angular', 'React', 'Python', 'Java','JavaScript']
 courses:string[] = mycourses
constructor(private fb: FormBuilder) {      //for Reactive formbuilder
  
}
ngOnInit(): void {
  // this.empData = new FormGroup(
  //   {
  //     fname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]),
  //     lname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]),
  //     courses: new FormControl('',[Validators.required]),
  //     term: new FormControl('',[Validators.required]),
  //   }
  // )

      //for Reactive formbuilder
  
  //    this.empData = this.fb.group(
  //     {
  //  fname: ['',[Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
  //  lname: ['',[Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
  //  courses: ['',[Validators.required]],
  //  term: ['',[Validators.requiredTerm]]
  //    }
  //    )

  this.empData = this.fb.group(
         {
      fname: ['',[Validators.required, Validators.pattern(regxName)]],
      lname: ['',[Validators.required, Validators.pattern(regxName)]],
      courses: ['',[Validators.required]],
      term: ['',[Validators.requiredTrue]]
        }
        )
    }
getData(data:any) {
  console.log(data)
}

}
