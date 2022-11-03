import { Component, OnInit } from '@angular/core';
// import {HEROES} from "../data"
import { HeroService } from '../service/hero.service';
import { Hero } from '../model/hero';
import { Location } from '@angular/common';

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

  constructor(private heroService: HeroService, private location: Location){}

  ngOnInit(): void {
    this.heroes = []
    this.getHeroes()
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  goBack(): void {
    this.location.back()
  }
}