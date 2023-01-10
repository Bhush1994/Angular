import { Component } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  Message = ("Welcome to the world of Angular")
  today = Date()


  //ITS BELOW LENTHY TYPE OR DIFFICULE 
  capString (Message:string) {
    return Message.toUpperCase()
  }

//
  emp = {
    name : "Bhushan",
    dept : "comp s" ,
    salary : 20000,
    address : "jalgaon",
  }

  students = [
    {roll:101, name :'Ajay', gender:'Male', address:'Jalgaon,', contact:9087787878},
    {roll:102, name :'Aniket', gender:'Male', address:'Latur', contact:9087787878},
    {roll:103, name :'Vishal',gender:'Male', address:'Bhusawal', contact:9087787878},
    {roll:104, name :'Bhushan', gender:'Male', address:'Nashik', contact:9087787878},
    {roll:105, name :'Pratik', gender:'Male', address:'Pune', contact:9087787878}
  ]


  //Here are injecting the router object
  constructor(private _router:Router) {  //if private things then specified using underscore          else upto us

  }
  //This method will be called when user click on roll number
  //when we add the roll no as parameter as /pipes path
  //so eventually it will navigate to that path e.g /pipes/101
  setParam(roll:any){
    this._router.navigate(['/pipes',roll])
  }
}
