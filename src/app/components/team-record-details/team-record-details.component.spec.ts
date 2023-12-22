import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRecordDetailsComponent } from './team-record-details.component';

describe('TeamRecordDetailsComponent', () => {
  let component: TeamRecordDetailsComponent;
  let fixture: ComponentFixture<TeamRecordDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamRecordDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamRecordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
