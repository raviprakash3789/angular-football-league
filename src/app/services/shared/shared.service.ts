import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILeagueResponse, ITeamDetails } from '../../modals/leagueDetails.modal';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  requestApiBaseUrl:string = "https://v3.football.api-sports.io/";
  leagueSeason!:number;
  leagueDetailsSubject:BehaviorSubject<ITeamDetails>;
  loading:BehaviorSubject<boolean>;

  constructor() {
     this.leagueSeason = new Date().getFullYear();
     this.leagueDetailsSubject = new BehaviorSubject<ITeamDetails>({teamId:0,
      leagueId:0,season:0});
      this.loading = new BehaviorSubject<boolean>(true);
   }

   requestHttpHeader():Object {
    const headers = new HttpHeaders()
    .set('x-rapidapi-host','v3.football.api-sports.io')
    .set('x-rapidapi-key','943410ec8a97c41585211f38e019bded');
    return {headers};
  }
  detailsShare(data:ITeamDetails){
    this.leagueDetailsSubject.next(data);
  }

  setLocalStorage(key:string,data:ILeagueResponse) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(key, jsonData)
 }
  getLocalStorage(key:string) {
    const data = localStorage.getItem(key);
    return data;
  }
  clearLocalStorage() {
    localStorage.clear();
  }
}
