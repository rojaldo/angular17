import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';

@Pipe({
  name: 'filterByPopulation',
  standalone: true
})
export class FilterByPopulationPipe implements PipeTransform {

  transform(value: Country[], ...args: number[]): Country[] {
    if (!value) return value;
    if (!args || args.length !== 2) return value;
    if (args[0] > args[1] ) return value
    return value.filter((country: Country) => country.population >= args[0] && country.population <= args[1]);
  }

}
