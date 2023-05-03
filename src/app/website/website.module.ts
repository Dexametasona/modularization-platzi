import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { WebsiteRoutingModule } from './website-routing.module';
import { PagesModule } from './pages/pages.module';
import { CompsModule } from './comps/comps.module';
import { Layout1Component } from './layout1/layout1.component';



@NgModule({
  declarations: [
    Layout1Component
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    PagesModule,
    CompsModule,
    HttpClientModule
  ],
  exports:[
    Layout1Component
  ]
})
export class WebsiteModule { }
