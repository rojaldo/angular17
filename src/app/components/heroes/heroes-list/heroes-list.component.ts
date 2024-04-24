import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent {

  @Input() myHeroes:Hero[] = []

  @Output() onDeleteHero = new EventEmitter<number>()

  deleteHero(index: number) {
    this.onDeleteHero.emit(index)
    // this.myHeroes.splice(index, 1)
  }
}
