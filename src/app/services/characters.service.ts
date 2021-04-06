import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private httpClient: HttpClient) {}

  getCharactersBySchool(school: string): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${environment.API_BASE_URL}/characters/house/${school}`)
  }
}
