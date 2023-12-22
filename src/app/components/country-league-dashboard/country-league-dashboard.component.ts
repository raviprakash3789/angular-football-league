import { Component } from '@angular/core';
import { ICountryLists } from '../../modals/countryLists.modal';
import { ILeagueResponse } from '../../modals/leagueDetails.modal';

@Component({
  selector: 'app-country-league-dashboard',
  templateUrl: './country-league-dashboard.component.html',
  styleUrl: './country-league-dashboard.component.css'
})
export class CountryLeagueDashboardComponent {
  tableRecord!: ILeagueResponse;
  tableHeaders:string[] = ["","","Name","Games","W","L","D","Goal Difference","Points"]
  countryListRecords:ICountryLists[] = [{countryName:'England',countryLeagueId:39,countryLeagueName:'Premier League'},
  {countryName:'Spain',countryLeagueId:140,countryLeagueName:'La Liga'},
  {countryName:'France',countryLeagueId:61,countryLeagueName:'Ligue 1'},
  {countryName:'Germany',countryLeagueId:78,countryLeagueName:'Bundesliga'},
  { countryName:'Italy', countryLeagueId:135, countryLeagueName:'Serie A'}]
  constructor(){

  }
  getCountryLeagueRecord(data:ILeagueResponse){
    this.tableRecord = data;
  }
}
 