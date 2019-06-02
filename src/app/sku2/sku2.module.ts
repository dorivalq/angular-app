import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sku2Component } from './sku2.component';
import { FormsModule, ReactiveFormsModule, ControlContainer } from '@angular/forms';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    REACTIVE_DRIVEN_DIRECTIVES
    
  ],
      declarations: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        REACTIVE_DRIVEN_DIRECTIVES
      ]
})
export class Sku2Module { }
