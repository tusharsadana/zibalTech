
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { DashboardBottomComponent } from '../templates/dashboard-bottom/dashboard-bottom.component';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  topic = "Home"
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private bottomSheet: MatBottomSheet, private _router: Router, private _authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    var current_route = (this._router.url).split('/');
    if (current_route[2] == undefined)
      this.topic = "Home"
    if (current_route[2] == 'candidates')
      this.topic = 'Candidates';
    if (current_route[2] == 'hr')
      this.topic = 'Human Resource';
    if (current_route[2] == 'team')
      this.topic = 'Team Manager';
    if (current_route[2] == 'clients')
      this.topic = 'Clients';
    if (current_route[2] == 'job')
      this.topic = 'Jobs';
    if(current_route[2]=='applications')
      this.topic= 'Job Applications'
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this._authService.logout().subscribe(
      res => {
        localStorage.removeItem('uuid_auth')
        this._router.navigate(['/'])
      },
      err => {
        if (err.status == status) {
          localStorage.removeItem('uuid_auth')
          this._router.navigate(['/'])
        }

      }
    );

  }

  openBottomSheet() {
    this.bottomSheet.open(DashboardBottomComponent)
  }


  navigateTo(direction: number) {
    switch (direction) {
      case 1:
        this.topic = 'Home';
        this._router.navigate(['dashboard/'])

        break
      case 2:
        this.topic = 'Candidates';
        this._router.navigate(['dashboard/candidates'])
        break
      case 3:
        this.topic = 'Human Resource';
        this._router.navigate(['dashboard/hr'])
        break
      case 4:
        this.topic = 'Team Manager';
        this._router.navigate(['dashboard/team'])
        break
      case 5: this.topic = 'Clients';
        this._router.navigate(['dashboard/clients'])
        break
      case 6: this.topic = 'Jobs';
        this._router.navigate(['dashboard/job'])
        break
      case 7: this.topic= 'Job Applications'
      this._router.navigate(['dashboard/applications'])
    }
  }

}
