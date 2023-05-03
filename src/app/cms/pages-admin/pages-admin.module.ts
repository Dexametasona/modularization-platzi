import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filter1Component } from './filter1/filter1.component';
import { Home1Component } from './home1/home1.component';



@NgModule({
  declarations: [
    Filter1Component,
    Home1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Filter1Component,
    Home1Component
  ]
})
export class PagesAdminModule { }
