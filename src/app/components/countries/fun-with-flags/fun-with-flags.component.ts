import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { Country } from '../../../models/country';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-fun-with-flags',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './fun-with-flags.component.html',
  styleUrl: './fun-with-flags.component.scss'
})
export class FunWithFlagsComponent implements OnInit {

  gameCountries: Country[] = [];
  correctCountry: Country = new Country();

  buttonsClass: string[] = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary'];

  responded = false;

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.service.getCountries();
    this.service.countries$.subscribe((response: any) => {
      this.service.getFourRandomCountries();
      this.service.randomCountries$.subscribe((response: any) => {
        this.gameCountries = response;
        this.correctCountry = this.gameCountries[Math.floor(Math.random() * this.gameCountries.length)];
        // this.correctCountry = this.gameCountries[0];
      })
    })
  }

  handleButton(country: Country, index: number){
    if(!this.responded){
      this.responded = true;
      if (country.commonName === this.correctCountry.commonName){
        
      }
      // all classes ar btn-secondary
      this.buttonsClass.map((btnClass, i) => {
        this.buttonsClass[i] = 'btn btn-secondary'
      });

      this.buttonsClass[index] = country.commonName === this.correctCountry.commonName ? 'btn btn-success' : 'btn btn-danger';

      // set correct button to green
      this.buttonsClass[this.gameCountries.indexOf(this.correctCountry)] = 'btn btn-success';
    }
  }

}
