import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { MyEmptyPage } from './page/empty-route/empty-route.component';

import { SettingsComponent } from './page/settings/settings.component';
import { CreateNotesComponent } from './page/createNotes/create-notes.component';
import { loginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { CollectionComponent } from './page/collection-Trips/collection.component';
import { MiniNotesFormComponent } from './component/mini-notes-form/mini-notes-form.component';


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
    component: CollectionComponent,
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
