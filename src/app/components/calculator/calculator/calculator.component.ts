import { Component } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service';
import { DisplayComponent } from "../display/display.component";
import { KeyboardComponent } from '../keyboard/keyboard.component';


@Component({
    selector: 'app-calculator',
    standalone: true,
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.scss',
    imports: [DisplayComponent, KeyboardComponent]
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
