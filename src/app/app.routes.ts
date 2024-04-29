import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { ApodComponent } from './components/apod/apod/apod.component';
import { CountriesComponent } from './components/countries/countries/countries.component';
import { FunWithFlagsComponent } from './components/countries/fun-with-flags/fun-with-flags.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { TrivialComponent } from './components/trivial/trivial/trivial.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { myGuardGuard } from './guards/my-guard.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/calculator', pathMatch: 'full' },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'heroes', loadComponent: () => import('./components/heroes/heroes/heroes.component').then(m => m.HeroesComponent) },
    { path: 'apod', loadComponent: () => import('./components/apod/apod/apod.component').then(m => m.ApodComponent) },
    { path: 'countries', loadComponent: () => import('./components/countries/countries/countries.component').then(m => m.CountriesComponent) },
    { path: 'fun-with-flags', component: FunWithFlagsComponent },
    { path: 'trivial', component: TrivialComponent , canActivate: [myGuardGuard] },
    { path: 'template-form', component: TemplateFormComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: '**', component: PageNotFoundComponent }
];
