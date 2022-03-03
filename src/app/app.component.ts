import { Component } from '@angular/core';
import {BigInteger} from "@angular/compiler/src/i18n/big_integer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
   count=0;
   status=''
  constructor() {
    for (let i=0;i<10;i++)
    {

      setTimeout(()=>{
        this.count++;
        },i*1000);

    }
  }
  ngOnInit()
  {

  }

}
