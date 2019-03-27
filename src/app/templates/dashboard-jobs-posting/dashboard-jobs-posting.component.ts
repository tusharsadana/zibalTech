import {DashboardJobsViewComponent} from './../dashboard-jobs-view/dashboard-jobs-view.component';
import {Component,OnInit,ViewChild,EventEmitter,Output} from '@angular/core';
import {FormGroup,FormBuilder,Validators,NgForm} from '@angular/forms';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {MatDialog} from '@angular/material';
import {JobFieldFetchService} from '../../services/job-field-fetch.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard-jobs-posting',
  templateUrl: './dashboard-jobs-posting.component.html',
  styleUrls: ['./dashboard-jobs-posting.component.css']
})
export class DashboardJobsPostingComponent implements OnInit {

  @Output() index = new EventEmitter < any > ();

  jobFieldsArray;
  functionsArray;
  fuctionsIndex;
  educationArray;
  locationArray;
  educationIndex = undefined;
  nationsArray;
  form: FormGroup;
  htmlContent = '';
  selected;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
  }


  constructor(private fb: FormBuilder, public dialog: MatDialog, private jobFields: JobFieldFetchService, private _router: Router) {}

  ngOnInit() {
    this.jobFields.getIndustries().subscribe(res => {
      this.jobFieldsArray = res;

    }, err => {
      if (err.status == 401) {
        localStorage.removeItem('uuid_auth')
        this._router.navigate(['/'])
      }
    });


    this.jobFields.getFunctions().subscribe(res => {
      this.functionsArray = res;
    }, err => {
      if (err.status == 401) {
        localStorage.removeItem('uuid_auth')
        this._router.navigate(['/'])
      }
    })

    this.jobFields.getLocation().subscribe(res => {
      this.locationArray = res;
    }, err => {
      if (err.status == 401) {
        localStorage.removeItem('uuid_auth')
        this._router.navigate(['/'])
      }
    })


    this.jobFields.getEducation().subscribe(res => {
      this.educationArray = res;
    }, err => {
      if (err.status == 401) {
        localStorage.removeItem('uuid_auth')
        this._router.navigate(['/'])
      }
    });

    this.jobFields.getNations().subscribe(res => {
      this.nationsArray = res;
    }, err => {
      if (err.status == 401) {
        localStorage.removeItem('uuid_auth')
        this._router.navigate(['/'])
      }
    });
    /**Sub Controls*/
    const keywords = this.fb.group({
      keywords: ['', [

      ]],
      filter: [false]
    })

    const experience = this.fb.group({
      minimum: ['', [
        Validators.pattern("^[0-9]*$"),
        Validators.max(60),
        Validators.min(0)
      ]],
      maximum: ['', [
        Validators.pattern("^[0-9]*$"),
        Validators.max(60)
      ]],
      filter: [false]
    })

    const industry = this.fb.group({
      industry: ['', [
        
      ]],
      filter: [false]
    })

    const role = this.fb.group({
      role: ['',

      ],
      filter: [false]
    })

    const functions = this.fb.group({
      function: ['', [

      ]],
      role: role
    })

    const highestQualification = this.fb.group({
      highestQualification: [''],
      specialization: [''],
      filter: [false]
    })

    const nationality = this.fb.group({
      nationality: ['', [

      ]],
      filter: [false]
    })


    const autoRenewPeriod = this.fb.group({
      start: [0],
      end: [0]
    })

    const annualSalary = this.fb.group({
      min: [0, [
        Validators.pattern("^[0-9]*$"),
        Validators.max(10000000),
        Validators.min(0)
      ]],
      max: [0, [
        Validators.pattern("^[0-9]*$"),
        Validators.max(10000000)
      ]]
    })

    const location = this.fb.group({
      location: [''],
      filter: [false]
    })

    /**Sub Controls*/




    const matchingCriteriaSchema = this.fb.group({
      keywords: keywords,
      experience: experience,
      location: location,
      industry: industry,
      function: functions,
      highestQualification: highestQualification,
      nationality: nationality,
    })

    const scheduleJob = this.fb.group({
      makeLive: [false],
      autoRenew: [false],
      autoRenewPeriod: autoRenewPeriod
    })


    const jobOwner = this.fb.group({
      name: [''],
      contact: [''],
      email: ['',
        Validators.email
      ],
      companyProfile: ['']
    })

    const preferences = this.fb.group({
      jobType: [''],
      autoMatch: [false],
      revealContact: [false],
      annualSalary: annualSalary,
      screening: [false],
      companyName: [false],
      womenOnGo: [false],
      applicationsInEmail: [false],
    })

    /**Main Control */
    this.form = this.fb.group({
      title: ['', [
,
        Validators.maxLength(100)
      ]],
      reference: [''],
      description: ['', [
,
        Validators.maxLength(1000)
      ]],
      details: ['', [
,
        Validators.maxLength(5000)
      ]],
      matchingCriteria: matchingCriteriaSchema,
      jobOwner: jobOwner,
      scheduleJob: scheduleJob,
      preferences: preferences
    })
    /**Main Control */
  }





  get titleField() {
    return this.form.get('title')
  }
  titleError() {
    return this.titleField.hasError('required') ? 'The field is required' : this.titleField.hasError('maxLength') ? 'The max length can only be under 100' : ''
  }

  get detailsField() {
    return this.form.get('details')
  }
  get descriptionField() {
    return this.form.get('description')
  }
  descriptionError() {
    return this.descriptionField.hasError('required') ? 'The field is required' : this.descriptionField.hasError('maxLength') ? 'The max length can only be under 250' : ''
  }

  get keywordsField() {
    return this.form.get('matchingCriteria').get('keywords').get('keywords')
  }
  keywordsError() {
    return this.keywordsField.hasError('required') ? 'This field is required' : ''
  }

  get emailField() {
    return this.form.get('jobOwner').get('email')
  }

  get expMaxField() {
    return this.form.get('matchingCriteria').get('experience').get('maximum')
  }
  expMaxError() {
    return this.expMaxField.hasError('pattern') ? 'Please enter a number between 0 - 99' : this.expMaxField.hasError('max')?'This value can only be between 0-60 without any special characters':''
  }
  get expMinField() {
    return this.form.get('matchingCriteria').get('experience').get('minimum')
  }
  expMinError() {
    return this.expMinField.hasError('pattern') ? 'Please enter a number between 0 - 99' : this.expMaxField.hasError('max')?'This value can only be between 0-60 without any special characters':''
  }

  get industryField() {
    return this.form.get('matchingCriteria').get('industry').get('industry')
  }

  industryError() {
    return this.industryField.hasError('required') ? 'This field is required' : ''
  }

  get functionField() {
    return this.form.get('matchingCriteria').get('function').get('function')
  }

  functionError() {
    return this.functionField.hasError('required') ? 'This field is required' : ''
  }

  get roleField() {
    return this.form.get('matchingCriteria').get('function').get('role').get('role')
  }
  roleError() {
    return this.roleField.hasError('required') ? 'This field is required' : ''
  }

  get nationsField() {
    return this.form.get('matchingCriteria').get('nationality').get('nationality')
  }
  nationsError() {
    return this.nationsField.hasError('required') ? 'This field is required' : ''
  }


  get maxSalaryField() {
    return this.form.get('preferences').get('annualSalary').get('max')
  }
  maxSalaryError() {
    return this.maxSalaryField.hasError('pattern') ? 'Please make sure the salary is a number without a special character in between' : this.maxSalaryField.hasError('max')?'This value can only be between 0-10000000 without any special characters':''
  }

  get minSalaryField() {
    return this.form.get('preferences').get('annualSalary').get('min')
  }
  minSalaryError() {
    return this.minSalaryField.hasError('pattern') ? 'Please make sure the salary is a number without a special character in between' : this.minSalaryField.hasError('max')?'This value can only be between 0-10000000 without any special characters':''
  }
  setfuctionsIndex(i) {
    this.fuctionsIndex = i;
  }
  setEducationIndex(i) {
    this.educationIndex = i
  }

  showJobs() {

    this.dialog.open(DashboardJobsViewComponent, {
      width: '500px',
      data: {
        data: this.form.value,
        fromServer: false
      }
    })
  }

  @ViewChild('formDirective') private formDirective: NgForm;

  submitForm() {
    this.form.value.matchingCriteria.keywords.keywords = this.form.value.matchingCriteria.keywords.keywords.toString().split(',');
    this.jobFields.postJob(this.form.value).subscribe(res => {
      this.formDirective.resetForm()
      alert('DONE')
      this._router.navigateByUrl('/dashboard', {
        skipLocationChange: true
      }).then(() => {
        this._router.navigateByUrl('/dashboard/job')
      })
    }, err => {
      if (err.status == 200)
        this.formDirective.resetForm();
      alert('DONE');
      this._router.navigateByUrl('/dashboard', {
        skipLocationChange: true
      }).then(() => {
        this._router.navigateByUrl('/dashboard/job')
      })
    })
  }
  changeTab() {

  }


}