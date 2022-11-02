import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Hero} from "../data"

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent{
  tanggal = new Date();
  dataKosong: string= "data kosong"

  @Input() count!: number;
  @Input() heroes!: Hero[];

  @Output() incrementEvent = new EventEmitter<number>();
  increment(penambah: number){
    this.incrementEvent.emit(penambah);
    console.log("penambah")
  }
}
