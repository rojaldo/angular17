

import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { ApodComponent } from "./components/apod/apod/apod.component";
import { CountriesComponent } from './components/countries/countries/countries.component';
import { FunWithFlagsComponent } from "./components/countries/fun-with-flags/fun-with-flags.component";
import { TrivialComponent } from './components/trivial/trivial/trivial.component';
import { TrivialService } from './services/trivial.service';
import { TemplateFormComponent } from "./components/forms/template-form/template-form.component";
import { ReactiveFormComponent } from "./components/forms/reactive-form/reactive-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [TrivialService],
    imports: [RouterOutlet, RouterModule, CalculatorComponent, NgbNavModule, HeroesComponent, ApodComponent, CountriesComponent, FunWithFlagsComponent, TrivialComponent, TemplateFormComponent, ReactiveFormComponent]
})
export class AppComponent {
  active = 7
}
