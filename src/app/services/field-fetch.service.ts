import { client } from './../interface/clients';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { candidate } from '../interface/candidate';


@Injectable({
  providedIn: 'root'
})
export class FieldFetchService {

  private _candidateFetch = `${environment.port}/admin/actions/list/candidate/`
  private _hrFetch = `${environment.port}/admin/actions/list/hcrs/`
  private _clientsFetch = `${environment.port}/admin/actions/list/client/`

  constructor(private http: HttpClient) { }

  getCandidates() {
    return this.http.get<candidate[]>(this._candidateFetch)
  }
  getHr() {
    return this.http.get<candidate[]>(this._hrFetch)
  }
  getClients() {
    return this.http.get<client[]>(this._clientsFetch)
  }
}
