import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import {ActivatedRoute} from '@angular/router';
import { HeroService } from '../service/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const idParams = Number(this.route.snapshot.paramMap.get('id')); //"2"
    this.heroService.getHero(idParams)
      .subscribe(a => this.hero = a)
  }

  goBack(): void {
    this.location.back()
  }
}
