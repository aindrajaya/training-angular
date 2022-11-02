import { Injectable } from '@angular/core';
import { Hero } from '../data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
   HEROES = [
    {name: 'Batman', phone: "25565115"},
    {name: 'Spiderman', phone: "25565115"},
    {name: 'Wonder Woman', phone: "25565115"},
    {name: 'Venom', phone: "25565115"},
    {name: 'Hulk', phone: "25565115"}
  ]

  getHeroes(): Hero[]{
    return this.HEROES;
  }
}
