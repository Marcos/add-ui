import { Injectable } from '@angular/core';
import { API_ENDPOINT, CharacterNicknameResponse, CharacterReferenceResponse, Character } from './api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  private url = `${API_ENDPOINT}/characters`;

  verifyNicknameExists(nickname): Observable<CharacterNicknameResponse> {
    return this.http.get<CharacterNicknameResponse>(`${this.url}/exists/${nickname}`)
  }

  create(character: Character): Observable<CharacterReferenceResponse>{
    return this.http.post<CharacterReferenceResponse>(this.url, character)
  }



}
