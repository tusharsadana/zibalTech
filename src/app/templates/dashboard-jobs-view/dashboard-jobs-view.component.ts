import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard-jobs-view',
  templateUrl: './dashboard-jobs-view.component.html',
  styleUrls: ['./dashboard-jobs-view.component.css']
})
export class DashboardJobsViewComponent implements OnInit {

  temp: any
  isJobPosted:boolean = false;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _router : Router, public dialogRef: MatDialogRef<DashboardJobsViewComponent>) { 
    
  
    if(!data.fromServer)
     data.data.matchingCriteria.keywords.keywords =data.data.matchingCriteria.keywords.keywords.toString().split(',');

    this.isJobPosted = data.fromServer; 
    this.temp = data.data;

    
  }

  ngOnInit() {
  }


  closeDialogue(_id){
    this.dialogRef.close()
    this._router.navigate(["dashboard/applications"],{queryParams:{id:_id}})
  }

}
