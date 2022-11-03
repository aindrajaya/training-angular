import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private baseUrl: string = 'http://localhost:3005';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.baseUrl+'/heroes');
  }
}
