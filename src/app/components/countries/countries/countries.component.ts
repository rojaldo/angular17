import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { CurrencyPipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Country } from '../../../models/country';
import { Km2Pipe } from "../../../pipes/km2.pipe";
import { OrderCountriesPipe } from "../../../pipes/order-countries.pipe";
import { Order, OrderCountries } from '../../../enum/enum';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-countries',
    standalone: true,
    templateUrl: './countries.component.html',
    styleUrl: './countries.component.scss',
    imports: [JsonPipe, Km2Pipe, OrderCountriesPipe, NgbDropdownModule]
})
export class CountriesComponent implements OnInit {

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
