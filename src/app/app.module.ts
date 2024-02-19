import { ElementRef, EventEmitter, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { WhoIAmComponent } from './who-i-am/who-i-am.component';
import { KnownTechnologiesComponent } from './known-technologies/known-technologies.component'; 
import { HttpClientModule } from '@angular/common/http';
import { WorksComponent } from './works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    WhoIAmComponent,
    KnownTechnologiesComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
