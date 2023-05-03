import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../cms/layout/layout.component';
import { FilterComponent } from './pages/filter/filter.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component:LayoutComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'filter', component:FilterComponent},
    {path:'', redirectTo:'home', pathMatch:'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
