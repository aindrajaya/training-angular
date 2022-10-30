import { Component, Input, OnInit } from '@angular/core';
import {Hero} from "../data"

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent{
  @Input() hero!: Hero;
}
