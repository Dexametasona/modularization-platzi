import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { PagesAdminModule } from './pages-admin/pages-admin.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    PagesAdminModule,
  ],
  exports:[
    LayoutComponent
  ]
})
export class CmsModule { }
