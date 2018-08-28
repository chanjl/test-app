import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() //attributes
  displayText: string = "Hello World"; //default value

  @Output() //events
  ToDisplay = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onKey(event) {
    console.log('I am keyuped: ', event.target.value);
    this.ToDisplay.next(event.target.value);
  }

  // pleaseDisplay(string) {
  //   console.log('I am going to display ', string);
  //   this.displayText = string;
  // }
}
