import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrivialCard } from '../../../models/trivialcard';

@Component({
  selector: 'app-trivial-card',
  standalone: true,
  imports: [],
  templateUrl: './trivial-card.component.html',
  styleUrl: './trivial-card.component.scss'
})
export class TrivialCardComponent implements OnInit{

  @Input() card: TrivialCard = new TrivialCard()
  @Output() onCorrectAnswer = new EventEmitter<boolean>()

  buttonsClasses = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary']

  constructor() { }

  ngOnInit(): void {
    this.updateButtonsClasses()
  }

  handleClick(answer: string, index: number) {
    this.card.responded = true
    this.card.userAnswer = answer
    this.card.indexAnswer = index
    this.onCorrectAnswer.emit(this.card.correctAnswer === answer)
    this.updateButtonsClasses()
  }

  updateButtonsClasses() {
    if (this.card.responded) {
      this.buttonsClasses = this.buttonsClasses.map((btnClass, i) => {
        if (i === this.card.indexAnswer) {
          return this.card.correctAnswer === this.card.userAnswer ? 'btn btn-success' : 'btn btn-danger'
        } else if (this.card.correctAnswer === this.card.answers[i]) {
          return 'btn btn-success'
        }
        return 'btn btn-secondary'
      })
    }else {
      this.buttonsClasses = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary']
    }
  }
}
