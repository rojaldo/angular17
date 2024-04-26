import { Component, OnInit } from '@angular/core';
import { TrivialService } from '../../../services/trivial.service';
import { TrivialCard } from '../../../models/trivialcard';
import { NgArrayPipesModule } from 'ngx-pipes';

@Component({
  selector: 'app-trivial',
  standalone: true,
  imports: [NgArrayPipesModule],
  templateUrl: './trivial.component.html',
  styleUrl: './trivial.component.scss'
})
export class TrivialComponent implements OnInit {

  cards: TrivialCard[] = [];

  constructor(private service: TrivialService) { }

  ngOnInit(): void {
    this.service.getQuestions();
    this.service.cards$.subscribe((response: any) => {
      this.cards = response;
    })
  }

}
