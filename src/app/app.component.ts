import { Component, Pipe } from '@angular/core';

@Pipe({
  name: "phone"
})
export class PhonePipe {
  transform(rawNum: any):string {
    rawNum = rawNum.charAt(0) != 0 ? "0" + rawNum : "" + rawNum;

    let newStr = "";
    let i = 0;

    for (; i < Math.floor(rawNum.length / 2) - 1; i++) {
      newStr = newStr + rawNum.substr(i * 2, 2) + "-";
    }

    return newStr + rawNum.substr(i * 2);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is App';
  nama = "Indrajaya"
}
