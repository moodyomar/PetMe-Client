import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DogsListComponent } from './dogsList/dogs-list.component';
import { HomeComponent } from './home/home.component';
import { AddDogsComponent } from './add-dogs/add-dogs.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"dogs", component:DogsListComponent},
  {path:"contact", component:ContactusComponent},
  {path:"login", component:LoginComponent, children:[
    {path:"addDogs",component:AddDogsComponent},
  ]},
  {path:"signup", component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
