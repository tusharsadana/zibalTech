import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardBottomComponent } from '../templates/dashboard-bottom/dashboard-bottom.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FieldFetchService } from '../services/field-fetch.service';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { CandidatesDialogueComponent } from '../templates/candidates-dialogue/candidates-dialogue.component';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { JobsComponent } from './components/jobs/jobs.component'
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardJobsListingComponent } from '../templates/dashboard-jobs-listing/dashboard-jobs-listing.component';
import { DashboardJobsPostingComponent } from '../templates/dashboard-jobs-posting/dashboard-jobs-posting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DashboardJobsViewComponent } from '../templates/dashboard-jobs-view/dashboard-jobs-view.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    DashboardBottomComponent,
    CandidatesDialogueComponent,
    JobsComponent,
    DashboardJobsListingComponent,
    DashboardJobsPostingComponent,
    DashboardJobsViewComponent
  ],
  imports: [
    MatTabsModule,
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatBottomSheetModule,
    MatRippleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    DashboardRoutingModule,
    MatTooltipModule,
    MatDialogModule,
    MatSortModule,
    MatSelectModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    AngularEditorModule,
    FormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule
  ],
  entryComponents: [DashboardBottomComponent, CandidatesDialogueComponent, DashboardJobsViewComponent],
  exports: [],
  providers: [
    FieldFetchService,

  ]
})
export class DashboardModule { }
