import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/login-page/login.component';
import { HomeComponent } from './page/home-page/home.component';
import { MySideBar } from './interface/header/sidebar/sidebar.component';
import { MyHeader } from './interface/header/header.component';
import { SettingsComponent } from './page/settings-page/settings.component';

import { IndexPageComponent } from './page/index-page/index-page.component';
import { AuthLayoutComponent } from './auth/shared/layouts/auth-layout/auth-layout.component';
import { CreateNotesComponent } from './page/createNotes-page/create-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    MySideBar,
    MyHeader,
    SettingsComponent,
    
    IndexPageComponent,
    AuthLayoutComponent,
    CreateNotesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
