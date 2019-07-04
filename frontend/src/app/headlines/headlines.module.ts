import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent } from './headlines.component';

const routes: Routes = [
  {
    path: '',
    component: HeadlinesComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [HeadlinesComponent]
})
export class HeadlinesModule { }
