import { Component, OnInit } from '@angular/core';
import { Hero2 } from '../data';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero2[] = [];
  heroes2: Hero[] = [];
  title: string = "Halaman Dashboard"

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.heroes = []
    this.getHeroes()
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}
