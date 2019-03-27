import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJobsViewComponent } from './dashboard-jobs-view.component';

describe('DashboardJobsViewComponent', () => {
  let component: DashboardJobsViewComponent;
  let fixture: ComponentFixture<DashboardJobsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardJobsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardJobsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
