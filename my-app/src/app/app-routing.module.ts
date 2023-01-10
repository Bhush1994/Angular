import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';

const routes: Routes = [
  
  {path:"data-binding", component: DataBindingComponent}, //name routing all below
  
  //{path:"directives", component: DirectivesComponent},
  {path:"directives", redirectTo:"parent"},  //Redirect routing
  {path:"parent", component:ParentComponent},
  {path:"ang-form", component:AngFormComponent, children:[   //child routing
    {path:"utdf", component:UtdfComponent},
    {path:"rtf", component:RtfComponent},  ]},

  {path:"categories", component:CategoriesComponent},
 {path:"pipes", component:PipesComponent},
 {path:"pipes/:id", component:PipesComponent},  //parameterised routing




  
  {path:"**", component:PageNotFoundComponent},   //wild card routing
  //{path:"**", component:ParentComponent},         //Default routing
  {path:"**", redirectTo:"ang-form", pathMatch:"full"},    //Default routing+Redirect routing
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
