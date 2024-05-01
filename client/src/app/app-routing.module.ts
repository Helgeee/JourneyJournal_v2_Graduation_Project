import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import {  ProfileComponent } from './page/profile/profile.component';
import { MyEmptyPage } from './page/empty-route/empty-route.component';
import { Header,  } from './interface/header/header.component';

import { SettingsComponent } from './page/settings/settings.component';
import { CreateNotesComponent } from './page/createNotes/create-notes.component';
import { loginComponent } from './page/login/login.component';
import { signupComponent } from './page/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',  
    component: loginComponent ,
  },
  {
    path: 'singnup' ,
    component: signupComponent ,

  },
  {
    path: 'header',  
    component: Header ,
  },
  {
    path: 'home',
    component: HomeComponent ,
  },
  {
    path: 'profile',  
    component: ProfileComponent,
  },
  {
    path: 'createNotes',
    component: CreateNotesComponent,
  },
  {
    path: 'settings',
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
