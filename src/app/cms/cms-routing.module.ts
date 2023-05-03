import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout1Component } from '../website/layout1/layout1.component';
import { Home1Component } from './pages-admin/home1/home1.component';
import { Filter1Component } from './pages-admin/filter1/filter1.component';

const routes: Routes = [
  {path:'', component:Layout1Component, children:[
    {path:'home1', component:Home1Component},
    {path:'filter1', component:Filter1Component},
    {path:'', redirectTo:'home1', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
