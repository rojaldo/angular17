import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { CurrencyPipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Country } from '../../../models/country';
import { Km2Pipe } from "../../../pipes/km2.pipe";
import { OrderCountriesPipe } from "../../../pipes/order-countries.pipe";
import { Order, OrderCountries } from '../../../enum/enum';
import { NgbDropdownModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { FilterByPopulationPipe } from '../../../pipes/filter-by-population.pipe';
import { OperatorFunction, Observable, debounceTime, distinctUntilChanged, map, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from "../../../pipes/filter-by-name.pipe";

@Component({
    selector: 'app-countries',
    standalone: true,
    templateUrl: './countries.component.html',
    styleUrl: './countries.component.scss',
    imports: [JsonPipe, Km2Pipe, OrderCountriesPipe, NgbDropdownModule, NgxSliderModule, FilterByPopulationPipe, FormsModule, NgbTypeaheadModule, FilterByNamePipe]
})
export class CountriesComponent implements OnInit {

  countryName = '';

	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : this.service.countryNames.filter((v: any) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
      tap((value) => console.log(value))
		);
    
  value: number = 40000000;
  highValue: number = 60000000;
  options: Options = {
    floor: 0,
    ceil: 1500000000
  };

  countries: Country[] = [];

  orderCountries = OrderCountries;
  order = Order;

  oc: OrderCountries = OrderCountries.Name;
  o: Order = Order.Asc;

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.service.getCountries();
    this.service.countries$.subscribe((response: any) => {
      this.countries = response;
    })

  }

  handleSelection(oc: OrderCountries, o: Order) {
    this.oc = oc;
    this.o = o;
  }


}
