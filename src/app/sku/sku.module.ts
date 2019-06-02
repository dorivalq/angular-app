import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuComponent } from './sku.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    SkuComponent,
    SkuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SkuModule { }
