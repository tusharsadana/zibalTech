import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJobsPostingComponent } from './dashboard-jobs-posting.component';

describe('DashboardJobsPostingComponent', () => {
  let component: DashboardJobsPostingComponent;
  let fixture: ComponentFixture<DashboardJobsPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardJobsPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardJobsPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
