import { Component, OnInit } from '@angular/core';
import { TrivialService } from '../../../services/trivial.service';
import { TrivialCard } from '../../../models/trivialcard';
import { NgArrayPipesModule } from 'ngx-pipes';
import { TrivialCardComponent } from "../trivial-card/trivial-card.component";

@Component({
    selector: 'app-trivial',
    standalone: true,
    templateUrl: './trivial.component.html',
    styleUrl: './trivial.component.scss',
    imports: [NgArrayPipesModule, TrivialCardComponent]
})
export class TrivialComponent implements OnInit {

  cards: TrivialCard[] = [];
  score = 0;

  constructor(private service: TrivialService) { }

  ngOnInit(): void {
    this.service.getQuestions();
    this.service.cards$.subscribe((response: any) => {
      this.cards = response;
    })
    this.service.score$.subscribe((response: any) => {
      this.score = response;
    })
  }

  handleResponse(correct: boolean) {
    this.score = correct ? this.score + 2 : --this.score;
    this.service.score = this.score; 
  }
}
