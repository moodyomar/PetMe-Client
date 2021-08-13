import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DogsListComponent } from './dogsList/dogs-list.component';
import { HomeComponent } from './home/home.component';
import { AddDogsComponent } from './add-dogs/add-dogs.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { EditDogsComponent } from './edit-dogs/edit-dogs.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contact", component:ContactusComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"admin", component:AdminPanelComponent},
  {path:"dogs", component:DogsListComponent},
  {path:"addDog",component:AddDogsComponent},
  {path:"editDog/:id",component:EditDogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
