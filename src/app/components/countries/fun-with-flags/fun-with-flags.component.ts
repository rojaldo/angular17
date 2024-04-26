import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { Country } from '../../../models/country';
import { JsonPipe } from '@angular/common';
import { CountryCardComponent } from "../country-card/country-card.component";

@Component({
    selector: 'app-fun-with-flags',
    standalone: true,
    templateUrl: './fun-with-flags.component.html',
    styleUrl: './fun-with-flags.component.scss',
    imports: [JsonPipe, CountryCardComponent]
})
export class FunWithFlagsComponent implements OnInit {

  gameCountries: Country[] = [];

  score = 0;

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.service.getCountries();
    this.service.countries$.subscribe((response: any) => {
      this.service.getFourRandomCountries();
      this.service.randomCountries$.subscribe((response: any) => {
        this.gameCountries = response;
      })
    })
  }

  handleNext(){
    this.service.getFourRandomCountries();
  }

  handleAnswer(correct: boolean){
    this.score += correct ? 2 : -1;
  }


}
