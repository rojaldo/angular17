import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent implements OnChanges {

  @Input() countries: Country[] = [];
  @Output() onRightAnswer = new EventEmitter<boolean>();

  correctCountry: Country = new Country();

  buttonsClass: string[] = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary'];

  responded = false;

  ngOnChanges(changes: SimpleChanges): void {
    // this.countries = changes['countries'].currentValue;
    // check if is not first change
    if (changes['countries'].firstChange === false){
      this.initCard();
      this.correctCountry = this.countries[Math.floor(Math.random() * this.countries.length)];
    }
    
  }

  initCard(){
    this.responded = false;
    this.buttonsClass = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary'];
  }

  handleButton(country: Country, index: number){
    if(!this.responded){
      this.responded = true;
      (country.commonName === this.correctCountry.commonName) ? this.onRightAnswer.emit(true) : this.onRightAnswer.emit(false);

      // all classes ar btn-secondary
      this.buttonsClass.map((btnClass, i) => {
        this.buttonsClass[i] = 'btn btn-secondary'
      });

      this.buttonsClass[index] = country.commonName === this.correctCountry.commonName ? 'btn btn-success' : 'btn btn-danger';

      // set correct button to green
      this.buttonsClass[this.countries.indexOf(this.correctCountry)] = 'btn btn-success';
    }
  }



}
