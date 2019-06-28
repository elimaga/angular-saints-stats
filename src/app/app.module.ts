import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaintsLogoComponent } from './saints-logo/saints-logo.component';
import { InstagramLogoComponent } from './instagram-logo/instagram-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    SaintsLogoComponent,
    InstagramLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
