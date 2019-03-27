import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobFieldFetchService {

  private _industriesUrl = `${environment.port}/admin/actions/list/forms/industries`
  private _functions = `${environment.port}/admin/actions/list/forms/functions`
  private _education = `${environment.port}/admin/actions/list/forms/qualifications/`
  private _nations = `${environment.port}/admin/actions/list/forms/nationalities/`
  private _locations = `${environment.port}/admin/actions/list/forms/locations`

  private _allJobs = `${environment.port}/admin/actions/list/jobpost/`
  
  private _allApplicants = `${environment.port}/admin/actions/list/jobpost/listapplicant`
  private _fetchApplicantByID = `${environment.port}/admin/actions/list/jobpost/id/`


  private _submit = `${environment.port}/admin/actions/list/jobpost/addjob`

  constructor(private http: HttpClient) { }

  getIndustries() {
    return this.http.get<any>(this._industriesUrl)
  }

  getFunctions() {
    return this.http.get<any>(this._functions)
  }

  getEducation() {
    return this.http.get<any>(this._education)
  }

  getNations() {
    return this.http.get<any>(this._nations)
  }

  getLocation() {
    return this.http.get<any>(this._locations)
  }

  postJob(formData) {
    return this.http.post<any>(this._submit, formData)
  }

  allJobs(){
    return this.http.get<any>(this._allJobs)
  }

  allApplicants(param: String){
    if(param=='')
      return this.http.get<any>(this._allApplicants)
    else{
      return this.http.get<any>(this._fetchApplicantByID+param)
    }
      
    
  }

}
