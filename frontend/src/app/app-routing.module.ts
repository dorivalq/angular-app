import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'registration', component:RegistrationComponent},
  {path : 'documents', component:DocumentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
