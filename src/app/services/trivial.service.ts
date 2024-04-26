import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrivialCard } from '../models/trivialcard';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {

  private _cards: TrivialCard[] = [];
  cards$ = new BehaviorSubject<any[]>(this._cards);

  constructor(private http: HttpClient) { }

  getQuestions(){
    const observer = {
      next: (data: any) => {
        this._cards = data.results.map((card: any) => new TrivialCard(card)); 
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
