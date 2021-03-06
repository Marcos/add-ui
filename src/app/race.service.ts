import { Injectable } from '@angular/core';
import { ResultList, API_ENDPOINT } from './api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) { }

  private raceUrl = `${API_ENDPOINT}/attributes/race`;

  getRaces(): Observable<ResultList> {
    return this.http.get<ResultList>(this.raceUrl)
  }

}
