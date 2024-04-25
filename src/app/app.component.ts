

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { ApodComponent } from "./components/apod/apod/apod.component";
import { CountriesComponent } from './components/countries/countries/countries.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CalculatorComponent, NgbNavModule, HeroesComponent, ApodComponent, CountriesComponent]
})
export class AppComponent {
  active = 4
}
