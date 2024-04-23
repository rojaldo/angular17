import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, JsonPipe, NgIf],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  heroes: Hero[] = [ new Hero('Superman', 'man of steel'), new Hero('Batman', 'dark knight') ]

  heroName = ''
  heroDescription = ''

  constructor() { }

  addHero() {
    if (this.heroName) {
      this.heroes.push(new Hero(this.heroName, this.heroDescription))
      this.heroName = ''
      this.heroDescription = ''
    }
  }
}