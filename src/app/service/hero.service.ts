import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl: string = 'http://localhost:3005/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroUrl);
  }

  getHero(id: number): Observable<Hero>{
    //--> http://localhost:3005/heroes/5
    const urlByID = `${this.heroUrl}/${id}`
    return this.http.get<Hero>(urlByID) // 
  }
}
