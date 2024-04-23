

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

enum State {
  Init,
  FirstFigure,
  SecondFigure,
  Result
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  display = ''

  currentState = State.Init
  firstNumber = 0
  secondNumber = 0
  operator = ''
  result = 0


  handleClick(value: number | string) {
    if(typeof value === 'number') {
      this.handleNumber(value)
    }else if (typeof value === 'string') {
      this.handleString(value)
    }
  }

  handleNumber(value: number) {
    switch(this.currentState) {
      case State.Init:
        this.firstNumber = value
        this.display = value.toString()
        this.currentState = State.FirstFigure
        break
      case State.FirstFigure:
        this.firstNumber = this.firstNumber * 10 + value
        this.display += value.toString()
        break
      case State.SecondFigure:
        this.secondNumber = this.secondNumber * 10 + value
        this.display += value.toString()
        break
      case State.Result:
        this.clear()
        this.firstNumber = value
        this.display = value.toString()
        this.currentState = State.FirstFigure
        break
    }
  }

  clear() {
    this.display = ''
    this.firstNumber = 0
    this.secondNumber = 0
    this.operator = ''
    this.currentState = State.Init
  }

  handleString(value: string) {
    (value === 'C')? this.clear() : null

    switch(this.currentState) {
      case State.Init:
        break
      case State.FirstFigure:
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          this.operator = value
          this.display += value
          this.currentState = State.SecondFigure
        }
        break
      case State.SecondFigure:
        if(value === '=') {
          this.result = this.resolve()
          this.display += value + this.result.toString()
          this.currentState = State.Result
        }
        break
      case State.Result:
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          this.firstNumber = this.result
          this.operator = value
          this.display = this.firstNumber.toString() + value
          this.secondNumber = 0
          this.result = 0
          this.currentState = State.SecondFigure
        }
        break
    }
  }

  resolve(): number {
    switch(this.operator) {
      case '+':
        return this.firstNumber + this.secondNumber
      case '-':
        return this.firstNumber - this.secondNumber
      case '*':
        return this.firstNumber * this.secondNumber
      case '/':
        return this.firstNumber / this.secondNumber
      default:
        return 0
    }
  }
}
