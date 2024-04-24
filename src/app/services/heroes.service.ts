import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _heroes: Hero[] = [ new Hero('Superman', 'man of steel'), new Hero('Batman', 'dark knight') ]
  heroes$ = new BehaviorSubject<Hero[]>(this._heroes)

  constructor() { }

  get heroes() {
    return [...this._heroes]
  }

  addHero(hero: Hero) {    
    this._heroes.push(hero)
    this.heroes$.next(this._heroes)
  }

  deleteHero(index: number) {
    this._heroes.splice(index, 1)
    this.heroes$.next(this._heroes)
  }
}
