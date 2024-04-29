import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrivialCard } from '../models/trivialcard';

@Injectable()
export class TrivialService {

  private _cards: TrivialCard[] = [];
  cards$ = new BehaviorSubject<any[]>(this._cards);
  private _score = 0;
  score$ = new BehaviorSubject<number>(this._score);

  constructor(private http: HttpClient) { }

  get score() {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
    this.score$.next(this._score);
  }

  getQuestions(){
    const observer = {
      next: (data: any) => {
        this._cards = [...this._cards, ...data.results.map((card: any) => new TrivialCard(card))]; 
        this.cards$.next(this._cards);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed');
      }
    }
    this.http.get('https://opentdb.com/api.php?amount=10').subscribe(observer);
  }
}
