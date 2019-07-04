import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { DocumentsComponent } from './documents/documents.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { SourcesComponent } from './sources/sources.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'registration', component:RegistrationComponent},
  {path : 'documents', component:DocumentsComponent},

  // {path : 'headlines', 
  //        component: HeadlinesComponent}
  {path : 'headlines', loadChildren: 'headlines/headlines.module#HeadlinesModule'},
  {path: 'sources', loadChildren: './sources/sources.module#SourcesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
