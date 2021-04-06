import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher } from '../models/teacher.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  constructor(private httpClient: HttpClient) {

  }

  getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(`${environment.API_BASE_URL}/characters/staff`)
  }
}
