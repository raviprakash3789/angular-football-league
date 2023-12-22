import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLeagueDashboardComponent } from './country-league-dashboard.component';

describe('CountryLeagueDashboardComponent', () => {
  let component: CountryLeagueDashboardComponent;
  let fixture: ComponentFixture<CountryLeagueDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryLeagueDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryLeagueDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
