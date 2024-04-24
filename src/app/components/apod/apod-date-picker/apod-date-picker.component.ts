import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apod-date-picker',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule],
  templateUrl: './apod-date-picker.component.html',
  styleUrl: './apod-date-picker.component.scss'
})
export class ApodDatePickerComponent {

  @Output() onDateSelected = new EventEmitter<string>()
  model: any = {}

  constructor() {
    // set today date in format yyyy-mm-dd
    this.model = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }
  }

  handleDateSelected(value: any) {
    let dateStr = `${value.year}-${value.month}-${value.day}`
    this.onDateSelected.emit(dateStr)
  }

}
