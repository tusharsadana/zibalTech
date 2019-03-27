import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJobsListingComponent } from './dashboard-jobs-listing.component';

describe('DashboardJobsListingComponent', () => {
  let component: DashboardJobsListingComponent;
  let fixture: ComponentFixture<DashboardJobsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardJobsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardJobsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
