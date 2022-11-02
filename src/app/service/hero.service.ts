import { Injectable } from '@angular/core';
import { Hero } from '../data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
   HEROES = [
    {name: 'Batman', phone: "25565115"},
    {name: 'Spiderman', phone: "25565115"},
    {name: 'Wonder Woman', phone: "25565115"},
    {name: 'Venom', phone: "25565115"},
    {name: 'Hulk', phone: "25565115"},
    {name: 'Sazam', phone: "66565115"}
  ]

  getHeroes(): Observable<Hero[]>{
    const heroes = of(this.HEROES)
    return heroes;
  }
}
