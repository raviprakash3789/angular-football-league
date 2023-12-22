import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ILeagueDetails, ILeagueResponse, ITeamDetails } from '../../modals/leagueDetails.modal';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent implements OnChanges ,OnInit {
  @Input()
  LeagueResponseData!: ILeagueResponse;
  @Input()
  tableHeaders!: string[];
  standingList:any;
  loading!: boolean;
  constructor(private router:Router,private sharedService:SharedService){
  }
  ngOnChanges(): void {
    this.standingList = this.LeagueResponseData?.league?.standings[0];
  }
  ngOnInit(): void {
    this.sharedService.loading.subscribe((val:boolean) => {
    this.loading = val;
    console.log('loading',this.loading)
    })
  }
  leagueDetailsData(data:ILeagueDetails){
    this.router.navigate(["teams-details"]);
    const teamRecordParam: ITeamDetails = {
      teamId: data?.team?.id,
      leagueId: this.LeagueResponseData?.league?.id,
      season: this.LeagueResponseData?.league?.season
    };
   this.sharedService.detailsShare(teamRecordParam);
  }
}
