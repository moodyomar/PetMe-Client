import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TempNameComponent } from './temp-name/temp-name.component';

const routes: Routes = [
  {path:"shop", component:TempNameComponent},
  {path:"contact", component:ContactusComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
