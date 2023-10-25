import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  inputValue: string = '';
  square: number = 0;

  changeInputValue(eventData: Event) {
    this.inputValue = (<HTMLInputElement>eventData.target).value;
    this.calculateSquare();
  }

  calculateSquare() {
    const numericValue = parseFloat(this.inputValue);
    this.square =
      numericValue || numericValue === 0 ? numericValue * numericValue : 0;
  }
}
