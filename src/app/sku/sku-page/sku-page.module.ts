import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkuPageRoutingModule } from './sku-page-routing.module';
import { SkuPageComponent } from './sku-page.component';

@NgModule({
  imports: [
    CommonModule,
    SkuPageRoutingModule
  ],
  declarations: [SkuPageComponent]
})
export class SkuPageModule { 
  page: any;
}
