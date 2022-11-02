import { Component } from '@angular/core';
import {HEROES} from "../data"

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent{
  heroes = HEROES;
  title: string = "Judul awal"
  count: number = 1;
  inc(value: number){
    this.count = this.count + value;
  }
}