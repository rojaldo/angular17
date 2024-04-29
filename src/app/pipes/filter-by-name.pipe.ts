import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(value: Country[], ...args: string[]): Country[] {
    if (!args[0] || args[0].length < 2) {
      return value;
    }
    return value.filter((country: Country) => country.commonName.toLowerCase().includes(args[0].toLowerCase()));
  }

}
