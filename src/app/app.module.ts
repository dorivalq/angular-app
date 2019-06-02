import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SkuComponent } from './sku/sku.component';
import { Sku2Component } from './sku2/sku2.component';


@NgModule({
  declarations: [
     AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
    SkuComponent,
    Sku2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
