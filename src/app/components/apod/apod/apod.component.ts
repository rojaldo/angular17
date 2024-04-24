import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { YouTubePlayer } from '@angular/youtube-player';
import { Apod } from '../../../models/apod';
import { ApodInfoComponent } from "../apod-info/apod-info.component";
import { ApodDatePickerComponent } from '../apod-date-picker/apod-date-picker.component';

@Component({
    selector: 'app-apod',
    standalone: true,
    templateUrl: './apod.component.html',
    styleUrl: './apod.component.scss',
    imports: [JsonPipe, ApodInfoComponent, ApodDatePickerComponent]
})
export class ApodComponent implements OnInit{

  apod: Apod = new Apod()

  dateStr = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

  model: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  handleDateSelected(value: string){
    this.dateStr = value    
  }

}
