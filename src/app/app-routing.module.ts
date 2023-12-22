import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryLeagueDashboardComponent } from './components/country-league-dashboard/country-league-dashboard.component';
import { TeamRecordDetailsComponent } from './components/team-record-details/team-record-details.component';

const routes: Routes = [
  {path:'',component:CountryLeagueDashboardComponent},
  {path:'teams-details',component:TeamRecordDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 