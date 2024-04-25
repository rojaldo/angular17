import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { JsonPipe } from '@angular/common';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit{

  countries: Country[] = [];

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.service.getCountries();
    this.service.countries$.subscribe((response: any) => {
      this.countries = response;
    })

  }

  getCountries(){
    fetch('https://restcountries.com/v3.1/all')
  }

}
