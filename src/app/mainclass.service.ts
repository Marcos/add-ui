import { Injectable } from '@angular/core';
import { ResultList, API_ENDPOINT } from './api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainClassService {

  constructor(private http: HttpClient) { }

  private mainClassUrl = `${API_ENDPOINT}/attributes/mainclass`;

  getMainClasses(): Observable<ResultList> {
    return this.http.get<ResultList>(this.mainClassUrl)
  }

}
