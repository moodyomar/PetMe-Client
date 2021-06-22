import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DogsListComponent } from './dogsList/dogs-list.component';
import { HomeComponent } from './home/home.component';
import { AddDogsComponent } from './add-dogs/add-dogs.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { EditDogsComponent } from './edit-dogs/edit-dogs.component';
import { HeadingComponent } from './common/heading/heading.component';
import { SearchNsortComponent } from './search-nsort/search-nsort.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    DogsListComponent,
    HomeComponent,
    AddDogsComponent,
    AdminPanelComponent,
    EditDogsComponent,
    HeadingComponent,
    SearchNsortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-left',
      timeOut:1500,
      progressBar:true
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }