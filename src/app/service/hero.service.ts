import { Injectable } from '@angular/core';
import { Hero2 } from '../data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private baseUrl: string = 'http://localhost:3005/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero2[]>{
    return this.http.get<Hero2[]>(this.baseUrl);
  }

  getHero(id: number): Observable<Hero2>{
    const urlByID = `${this.baseUrl}/${id}`
    return this.http.get<Hero2>(urlByID)
  }
}
