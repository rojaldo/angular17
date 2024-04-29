import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _countries: Country[] = [];
  countries$ = new BehaviorSubject<Country[]>(this._countries);
  countryNames: string[] = [];

  randomCountries$ = new BehaviorSubject<Country[]>([]);

  constructor(private http:HttpClient) { }

  getCountries(){
    const observer = {
      next: (response: any) => {
        this._countries = response.map((json: any) => new Country(json));
        this.countryNames = this._countries.map((country: Country) => country.commonName);
        this.countries$.next(this._countries);
      },
      error: (error: any) => console.log(error)
    }
    this.http.get('https://restcountries.com/v3.1/all').subscribe(observer);
  }

  // get 4 different random countries
  getFourRandomCountries(): void{
    this.randomCountries$.next(this._countries.sort(() => Math.random() - Math.random()).slice(0, 4));


  }
}
