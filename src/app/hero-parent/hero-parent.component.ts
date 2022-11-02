import { Component, OnInit } from '@angular/core';
// import {HEROES} from "../data"
import { HeroService } from '../service/hero.service';
import { Hero } from '../data';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit{
  // heroes = HEROES;
  heroes: Hero[] = [];
  title: string = "Judul awal"
  count: number = 1;
  inc(value: number){
    this.count = this.count + value;
  }

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()
  }
}