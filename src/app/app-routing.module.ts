import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SkuComponent } from './sku/sku.component';
import { Sku2Component } from './sku2/sku2.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'registration', component:RegistrationComponent},
  {path : 'sku', component:Sku2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
