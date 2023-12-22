import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryLeagueDashboardComponent } from './components/country-league-dashboard/country-league-dashboard.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamRecordDetailsComponent } from './components/team-record-details/team-record-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryLeagueDashboardComponent,
    TableListComponent,
    TeamRecordDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
