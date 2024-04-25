import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _countries: Country[] = [];
  countries$ = new BehaviorSubject<any[]>(this._countries);

  constructor(private http:HttpClient) { }

  getCountries(){
    const observer = {
      next: (response: any) => {
        this._countries = response.map((json: any) => new Country(json));
        this.countries$.next(this._countries);
      },
      error: (error: any) => console.log(error)
    }
    this.http.get('https://restcountries.com/v3.1/all').subscribe(observer);
  }
}
