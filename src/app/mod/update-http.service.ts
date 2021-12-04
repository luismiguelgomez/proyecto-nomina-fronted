import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Update {
  "id": number,
  "incapacity_update": string,
  "vacations_update": string,
  "days_worked": number,
  "days_incap": number,
  "days_vacations": number,
  "start_vacations": string,
  "end_vacations": string,
  "start_incapacity": string,
  "end_incapacity": string,
  "bonus": string,
  "transport": string
}

@Injectable({
  providedIn: 'root'
})
export class UpdateHttpService {
  employees: Update[] = new Array(0)
  constructor(private http: HttpClient) { }

  getAllUpdates(): Observable<Update[]> {
    return this.http.get<Update[]>('http://localhost:3000/novedades')
  }

}

