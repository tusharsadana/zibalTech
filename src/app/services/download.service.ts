import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  private _hrResume = `${environment.port}/admin/actions/hcrs/resume/`
  private _candidateResume = `${environment.port}/admin/actions/candidate/resume/`
  constructor(private http: HttpClient) { }


  hrResume(id: String) {
    return this.http.get(this._hrResume+id )
  }
  candidateResume(id: String) {
    return this.http.get(this._candidateResume+id )
  }
}
