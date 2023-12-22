import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Observable } from 'rxjs';
import { teamDetailsResponse } from '../../modals/teamDetails.modal';
import { ILeagueDetailsResponse } from '../../modals/leagueDetails.modal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient,private sharedService: SharedService) { }

  getCountryLeagueData(countryLeagueId: number):Observable<ILeagueDetailsResponse> {
    const apiEndPoint = `${this.sharedService.requestApiBaseUrl}standings?league=${countryLeagueId}&season=${this.sharedService.leagueSeason}`;
    return this._http.get<ILeagueDetailsResponse>(apiEndPoint,this.sharedService.requestHttpHeader())
  }

  getTeamDetails(leagueId:number,season:number,teamId:number):Observable<teamDetailsResponse>{
    const apiEndPoint = `${this.sharedService.requestApiBaseUrl}fixtures?league=${leagueId}&season=${season}&team=${teamId}`;
    return this._http.get<teamDetailsResponse>(apiEndPoint,this.sharedService.requestHttpHeader())
  }
}











