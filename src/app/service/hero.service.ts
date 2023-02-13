import { Injectable } from '@angular/core';
import { Hero2 } from '../data';
import { Hero } from '../model/hero';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl: string = 'http://localhost:3005/heroes';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  getHero(id: number): Observable<Hero2>{
    const urlByID = `${this.baseUrl}/${id}`
    return this.http.get<Hero2>(urlByID)

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroUrl);
  }

  getHero(id: number): Observable<Hero>{
    //--> http://localhost:3005/heroes/5
    const urlByID = `${this.heroUrl}/${id}`
    return this.http.get<Hero>(urlByID) // 
  }

  /**
   * Add hero service
   */
  addHeroService(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroUrl, hero, this.httpOptions)
  }
}
