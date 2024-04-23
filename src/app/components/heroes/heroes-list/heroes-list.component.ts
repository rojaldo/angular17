import { Component, Input } from '@angular/core';
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

  deleteHero(index: number) {
  }
}
