import { Component } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service';


@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  display = ''

  constructor(private service: CalculatorService) { }

  handleClick(value: number | string) {
    if(typeof value === 'number') {
      this.display = this.service.handleNumber(value)
    }else if (typeof value === 'string') {
      this.display = this.service.handleString(value)
    }
  }


}
