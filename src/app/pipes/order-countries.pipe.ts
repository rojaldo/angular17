import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';
import { Order, OrderCountries } from '../enum/enum';

@Pipe({
  name: 'orderCountries',
  standalone: true,
  pure: true
})
export class OrderCountriesPipe implements PipeTransform {

  transform(value: Country[], ...args: (OrderCountries|Order)[]): Country[] {
    console.log(`OrderCountriesPipe.transform(${args})`);
    
    if (!value) return value;
    if (!args || args.length !== 2) return value;
    // check that args[0] is type OrderCountries and args[1] is a valid Order
    // if (typeof args[0] !== '' || typeof args[1] !== 'number') return value;
    switch (args[0]) {
      case OrderCountries.Name:
        return args[1] === Order.Asc ? value.sort((a, b) => a.commonName.localeCompare(b.commonName)) : value.sort((a, b) => b.commonName.localeCompare(a.commonName));
        args[1]
      case OrderCountries.Area:
        return args[1] === Order.Asc ? value.sort((a, b) => a.area - b.area) : value.sort((a, b) => b.area - a.area);
      case OrderCountries.Population:
        return args[1] === Order.Asc ? value.sort((a, b) => a.population - b.population) : value.sort((a, b) => b.population - a.population);
      default:
        return value;
    }
  }

}
