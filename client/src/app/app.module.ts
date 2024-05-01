import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import {  SideBarComponent } from './interface/sidebar/sidebar.component';
import { Header } from './interface/header/header.component';
import { SettingsComponent } from './page/settings/settings.component';
import { AuthLayoutComponent } from './auth/shared/layouts/auth-layout/auth-layout.component';
import { CreateNotesComponent } from './page/createNotes/create-notes.component';


@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    SideBarComponent,
    Header,
    SettingsComponent,
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
