import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Hero, HeroModel } from '../model/hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})

export class HeroParentComponent implements OnInit{
  heroes: Hero[] = [];
  title: string = "Judul awal"
  count: number = 1;
  inc(value: number){
    this.count = this.count + value;
  }

  modelHero = new HeroModel('Your hero name', '98765543')
  submitted = false;

  constructor(private heroService: HeroService, private location: Location){}

  ngOnInit(): void {
    this.heroes = []
    this.getHeroes()
  }

  onSubmit(){
    this.submitted = true;
    this.addHero()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  goBack(): void {
    this.location.back()
  }

  validateNo(e: any): boolean{
    const charCode = e.which ? e.which: e.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
      return false
    }
    return true
  }

  addHero(
    name: string = this.modelHero.name, 
    phone: string = this.modelHero.phone
    ): void {
      name = name.trim();
      if(!name) {return}
      this.heroService.addHeroService({name, phone} as Hero)
        .subscribe(hero => {
          this.heroes.push(hero)
        })
  }

  // addHero(name: string, phone: string): void {
  //   name = name.trim();
  //   if(!name) {return}
  //   let id: number = this.heroes.length + 1;
  //   this.heroService.addHeroService({id, name, phone} as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero)
  //     })
  // }
}