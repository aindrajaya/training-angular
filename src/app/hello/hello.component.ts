import { Component, OnInit } from '@angular/core';
import { Arr } from '../definition';

@Component({
  selector: 'app-hello',
  // template: `
  //   <h1>Helloo from Template Literals, muncul {{nama1}}</h1>
  //   <p *ngFor="let arr of arrays">tulisan ini berasal dari template literals {{arr}}</p>
  // `,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  nama1 = "One"
  arrays: Arr[] = [
    {name: "Array 1"},
    {name: "array 2"}
  ]
  arrayForHtml = [
    "A",
    "B",
    "C"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
