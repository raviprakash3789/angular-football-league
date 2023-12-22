import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Football-League';
constructor(private sharedService:SharedService,private router:Router){

}
ngOnInit(): void {
  this.sharedService.clearLocalStorage();
  this.router.navigate(['../'])
}
}
