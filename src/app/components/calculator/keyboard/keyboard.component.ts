import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss'
})
export class KeyboardComponent {

  @Output() onButtonClicked = new EventEmitter<number | string>()

  handleClick(value: number | string) {
    this.onButtonClicked.emit(value)
  }
}
