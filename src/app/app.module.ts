import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { SaintsLogoComponent } from './saints-logo/saints-logo.component';
import { InstagramLogoComponent } from './instagram-logo/instagram-logo.component';
import { KeyTableComponent } from './key-table/key-table.component';
import { StatsTableComponent } from './stats-table/stats-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SaintsLogoComponent,
    InstagramLogoComponent,
    KeyTableComponent,
    StatsTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
