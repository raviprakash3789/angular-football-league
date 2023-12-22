import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { ITeamDetails } from '../../modals/leagueDetails.modal';
import { ApiService } from '../../services/api/api.service';
import { teamDetails } from '../../modals/teamDetails.modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team-record-details',
  templateUrl: './team-record-details.component.html',
  styleUrl: './team-record-details.component.css'
})
export class TeamRecordDetailsComponent implements OnInit{
teamDetailsRecord: teamDetails[] = [];
constructor(private sharedService:SharedService,private apiService:ApiService,private router:Router){

}
ngOnInit():void {
  this.sharedService.leagueDetailsSubject.subscribe((res:ITeamDetails)=>{
    this.getTeamRecordDetails(res?.leagueId,res?.season,res?.teamId);
  })
}
getTeamRecordDetails(leagueId:number,season:number,teamId:number){
  this.apiService.getTeamDetails(leagueId,season,teamId).subscribe((res)=>{
    if(res && res.response && res.response.length>0){
      this.teamDetailsRecord = [...res.response.slice(0,10)];
    }
    else{
      console.log(Object.values(res.errors)[0])
    }
  })
}

navigateToPreviousScreen() {
this.router.navigate(['../'])
}

}
