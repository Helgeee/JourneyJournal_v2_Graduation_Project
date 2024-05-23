import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import {  ProfileComponent } from './page/profile/profile.component';
import { MyEmptyPage } from './page/empty-route/empty-route.component';
import { Header,  } from './interface/header/header.component';

import { SettingsComponent } from './page/settings/settings.component';
import { CreateNotesComponent } from './page/createNotes/create-notes.component';
import { loginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { TripsComponent } from './page/trips/trips.component';


const routes: Routes = [
  {
    path: '',  
    component: loginComponent ,
  },
  {
    path: 'signup' ,
    component: SignupComponent ,

  },
  {
    path: 'header',  
    component: Header ,
    canActivate: [ authGuard()],
    
  },
  {
    path: 'home',
    title: 'home',
    component: HomeComponent ,
    canActivate: [ authGuard()],
   
  },
  {
    path: 'profile',  
    component: ProfileComponent,
    canActivate: [ authGuard()],
  },
  {
    path: 'trips',
    component: TripsComponent,
    canActivate: [ authGuard()],
  }, 
  {
    path: 'createNotes',
    component: CreateNotesComponent,
    canActivate: [ authGuard()],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [ authGuard()],
  },
  
  {
    path: '**',
    component: MyEmptyPage,
    canActivate: [ authGuard()],
  }, 
 
 
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
