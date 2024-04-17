import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home-page/home.component';
import { MyProfileComponent } from './page/profile-page/profile.component';
import { MyEmptyPage } from './empty-route/empty-route.component';
import { MyHeader } from './interface/header/header.component';
import {  LoginPageComponent } from './auth/login-page/login.component';
import { CreateNotesComponent } from './page/createNotes-page/create-notes.component';
import { SettingsComponent } from './page/settings-page/settings.component';

const routes: Routes = [
  // {
  //   path: 'login-page',  
  //   component: LoginPageComponent ,
  // },
  {
    path: 'header',  
    component: MyHeader ,
  },
  {
    path: 'home-page',
    component: HomeComponent ,
  },
  {
    path: 'profile-page',  
    component: MyProfileComponent,
  },
  {
    path: 'createNotes-page',
    component: CreateNotesComponent,
  },
  {
    path: 'settings-page',
    component: SettingsComponent,
  },
  
  {
    path: '**',
    component: MyEmptyPage,
  }, 
 
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
