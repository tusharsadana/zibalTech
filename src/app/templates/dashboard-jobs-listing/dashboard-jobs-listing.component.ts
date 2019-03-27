import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { JobFieldFetchService } from '../../services/job-field-fetch.service'
import { Router } from '@angular/router'
import { DashboardJobsViewComponent } from './../dashboard-jobs-view/dashboard-jobs-view.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-dashboard-jobs-listing',
  templateUrl: './dashboard-jobs-listing.component.html',
  styleUrls: ['./dashboard-jobs-listing.component.css']
})
export class DashboardJobsListingComponent implements OnInit {

  allJobs: any;
  fetched:Boolean =  false;
  currentJob = null;


  constructor(private _jobFieldFetch: JobFieldFetchService, private _router: Router,changeDetectorRef: ChangeDetectorRef, public dialog: MatDialog) {  }

  ngOnInit() {
    this._jobFieldFetch.allJobs().subscribe(res=>{
        this.allJobs = res;
        this.fetched = true;
    }, err=>{
      if (err.status == 401) {
        localStorage.removeItem('uuid_auth')
        this._router.navigate(['/'])
      }
    })
  }

  setJob(job){
    this.currentJob = job;
  }

  openDialogue(job){
    this.dialog.open(DashboardJobsViewComponent, {
      width: '500px',
      data: {data: job,fromServer: true}
    })
  }

}
