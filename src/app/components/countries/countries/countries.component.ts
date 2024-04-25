import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { CurrencyPipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Country } from '../../../models/country';
import { Km2Pipe } from "../../../pipes/km2.pipe";
import { OrderCountriesPipe } from "../../../pipes/order-countries.pipe";
import { Order, OrderCountries } from '../../../enum/enum';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { FilterByPopulationPipe } from '../../../pipes/filter-by-population.pipe';

@Component({
    selector: 'app-countries',
    standalone: true,
    templateUrl: './countries.component.html',
    styleUrl: './countries.component.scss',
    imports: [JsonPipe, Km2Pipe, OrderCountriesPipe, NgbDropdownModule, NgxSliderModule, FilterByPopulationPipe]
})
export class CountriesComponent implements OnInit {

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
