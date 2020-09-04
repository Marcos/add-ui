import { Injectable } from '@angular/core';
import { ResultList, API_ENDPOINT, Attribute } from './api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubClassService {

  constructor(private http: HttpClient) { }

  private mainClassUrl = `${API_ENDPOINT}/subclasses`;

  getSubClassesByMainClass(mainClass:Attribute): Observable<ResultList> {
    return this.http.get<ResultList>(`${this.mainClassUrl}/${mainClass.index}`)
  }

}
