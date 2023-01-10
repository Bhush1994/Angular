import { Component } from '@angular/core';
import { mycourses } from 'src/app/shared/common-data/constants';

@Component({
  selector: 'app-utdf',
  templateUrl: './utdf.component.html',
  styleUrls: ['./utdf.component.css']
})
export class UtdfComponent {


  // courses:string[]=['Angular', 'React', 'Python', 'Java','JavaScript']

  courses: string[] = mycourses

  getData(data:any){
    console.log(data)
  }
  }

