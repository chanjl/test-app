import { Component } from '@angular/core';

import { ToPrint } from './components/hello.component';
// import { ToDisplay } from './components/display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Hello World';
  listNames = ['Erik', 'Magda', 'Peter', 'Wanda'];
  //listNames = [];
  toDisplay: string = this.listNames[0];
  displayText: string = "Hello World";
  myBgColor: string = "#FFFF11";

  nameSelected(name: string) {
    console.log('clicked: ', name);
    this.toDisplay = name;
  }

  //toPrint is $event
  pleasePrint(eventObject: ToPrint) {
    console.log('print: ', eventObject);
  }

  pleaseDisplay(string) {
    console.log('I am going to display ', string);
    this.displayText = string;
  }

  mouseEnter(eventObject: MouseEvent) {
    console.log('mouse entered ', eventObject.x, eventObject.y);
  }
}
