import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';
import { HeroFormComponent } from '../hero-form/hero-form.component';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, JsonPipe, NgIf, HeroFormComponent, HeroesListComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  heroes: Hero[] = [ new Hero('Superman', 'man of steel'), new Hero('Batman', 'dark knight') ]

  constructor() { }

  addHero(newHero: Hero) {
    this.heroes.push(newHero)
  }
  deleteHero(index: number) {
    this.heroes.splice(index, 1)
  }
}