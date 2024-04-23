import { Injectable } from '@angular/core';
import { State } from '../enum/enum';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  currentState = State.Init
  firstNumber = 0
  secondNumber = 0
  operator = ''
  result = 0
  display = ''

  constructor() { }


  handleNumber(value: number): string {
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
    return this.display
  }

  clear() {
    this.display = ''
    this.firstNumber = 0
    this.secondNumber = 0
    this.operator = ''
    this.currentState = State.Init
  }

  handleString(value: string): string {
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
    return this.display
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
