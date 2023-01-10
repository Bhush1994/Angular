import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { Task1Component } from './components/task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AttrDirectivesComponent } from './components/attr-directives/attr-directives.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { NavComponent } from './components/nav/nav.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { BooksComponent } from './components/books/books.component';
import { TVsComponent } from './components/tvs/tvs.component';
import { ToysComponent } from './components/toys/toys.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    Task1Component,
    Task2Component,
    AssignmentComponent,
    AttrDirectivesComponent,
    ParentComponent,
    ChildComponent,
    NavComponent,
    RtfComponent,
    UtdfComponent,
    PageNotFoundComponent,
    AngFormComponent,
    CategoriesComponent,
    MobilesComponent,
    BooksComponent,
    TVsComponent,
    ToysComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
