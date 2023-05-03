import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './cms/layout/layout.component';
import { HomeComponent } from './website/pages/home/home.component';
import { FilterComponent } from './website/pages/filter/filter.component';
import { Filter1Component } from './cms/pages-admin/filter1/filter1.component';
import { Home1Component } from './cms/pages-admin/home1/home1.component';
import { Layout1Component } from './website/layout1/layout1.component';
import { CustomPreloadService } from './services/custom-preload.service';
import {QuicklinkStrategy} from 'ngx-quicklink'

const routes: Routes = [
  {path:'', redirectTo:'website', pathMatch:'full'},
  {path:'cms', loadChildren:()=>import('./cms/cms.module').then(root=>root.CmsModule),
  data:{
    preload:true
  }},
  {path:'website', loadChildren:()=>import('./website/website.module').then(root=>root.WebsiteModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:QuicklinkStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
