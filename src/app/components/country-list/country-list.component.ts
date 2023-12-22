import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICountryLists } from '../../modals/countryLists.modal';
import { ApiService } from '../../services/api/api.service';
import {ILeagueResponse, ITeamDetails} from '../../modals/leagueDetails.modal';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit {
  @Input()
  countryListRecords!: ICountryLists[];
  selectCountryName!: string;
  @Output() countryLeagueRecord:EventEmitter<ILeagueResponse> = new EventEmitter<ILeagueResponse>();
  eachCountryLeagueRecord!: ILeagueResponse[];
  constructor( private apiService:ApiService, private sharedService:SharedService){
  }
  
  ngOnInit(): void {
    this.sharedService.leagueDetailsSubject.subscribe((res:ITeamDetails)=>{
      if(res !== null && this.countryListRecords.length > 0){
        const data = this.countryListRecords.find((countryList)=> countryList.countryLeagueId === res.leagueId) || this.countryListRecords[0];
        this.selectCountryName = data?.countryName;
        this.getEachCountryLeagueData(data?.countryLeagueId);
      }
    })
  }

  countrySelectionEvent(value:ICountryLists){
    this.sharedService.loading.next(true)

  const countryLeagueId = value?.countryLeagueId;
  this.getEachCountryLeagueData(countryLeagueId);
  this.selectCountryName = value?.countryName
  }
  getEachCountryLeagueData(countryLeagueId:number) {
    const data = this.sharedService.getLocalStorage(`countrySelected-${countryLeagueId}`);
    if(data !== null){
      this.sharedService.loading.next(false)
      const selectedleagueData = JSON.parse(data);
      this.eachCountryLeagueRecord = [selectedleagueData];
      this.getcountryLeagueRecord(selectedleagueData);
    }
    else{
      this.apiService.getCountryLeagueData(countryLeagueId).subscribe((res) =>{
        if(res?.response && res?.response?.length>0){
          this.sharedService.setLocalStorage(`countrySelected-${countryLeagueId}`, res.response[0])
          this.eachCountryLeagueRecord = [res?.response[0]];
          this.getcountryLeagueRecord(res?.response[0]);
          this.sharedService.loading.next(false)
      }
        else {
          alert(Object.values(res.errors)[0]);
        }
       });
    }
  }

  getcountryLeagueRecord(list:ILeagueResponse){
    this.countryLeagueRecord.emit(list);
  }
}
