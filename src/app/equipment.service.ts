import { Injectable } from '@angular/core';
import { ResultList, API_ENDPOINT } from './api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }

  private raceUrl = `${API_ENDPOINT}/attributes/equipment`;

  getEquipments(): Observable<ResultList> {
    return this.http.get<ResultList>(this.raceUrl)
  }

}
