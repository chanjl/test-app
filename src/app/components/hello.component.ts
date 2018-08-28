import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface ToPrint {
  name: string;
  count: number;
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @Input() //attributes
  displayName: string = "Visitor"; //default value

  @Output() //events
  toPrint = new EventEmitter<ToPrint>();
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  amClicked() {
    this.count++;
    console.log('I am clicked: ', this.displayName);
    const eventObject: ToPrint = {
      name: this.displayName,
      count: this.count
    }
    this.toPrint.next(eventObject);
  }
}
