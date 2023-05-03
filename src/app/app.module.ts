import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CmsModule } from './cms/cms.module';
import { WebsiteModule } from './website/website.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CmsModule,
    WebsiteModule,
    QuicklinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
