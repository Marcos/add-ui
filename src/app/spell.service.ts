import { Injectable } from '@angular/core';
import { ResultList, API_ENDPOINT, Attribute } from './api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private http: HttpClient) { }

  private spellUrl = `${API_ENDPOINT}/spells`;

  getSpeels(mainClass:Attribute, subClass:Attribute): Observable<ResultList> {
    return this.http.get<ResultList>(`${this.spellUrl}/${mainClass.id}/${subClass.id}`)
  }

}
