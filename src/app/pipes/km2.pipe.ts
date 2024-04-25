import { Pipe, PipeTransform } from '@angular/core';
import { elementAt } from 'rxjs';

@Pipe({
  name: 'km2',
  standalone: true
})
export class Km2Pipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value < 0) {
      console.error('Invalid area value: ' + value + ' km²');
      return 'N/A';
    }else if (value === 0) {
      return 'No Extension';
    }else if (value > 0) {
      return `${value} km²`;
    }
    return 'N/A';
    
  }

}
