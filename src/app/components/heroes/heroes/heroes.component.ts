import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';
import { HeroFormComponent } from '../hero-form/hero-form.component';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, JsonPipe, NgIf, HeroFormComponent, HeroesListComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [ ]

  constructor(private service: HeroesService) { 
    
  }
  ngOnInit(): void {
    this.heroes = this.service.heroes
    this.service.heroes$.subscribe(heroes => this.heroes = heroes)
  }

  addHero(newHero: Hero) {
    this.service.addHero(newHero)
  }
  deleteHero(index: number) {
    this.service.deleteHero(index) 
  }
}