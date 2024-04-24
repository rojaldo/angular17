import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { YouTubePlayer } from '@angular/youtube-player';
import { Apod } from '../../../models/apod';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [JsonPipe, NgbDatepickerModule, FormsModule, YouTubePlayer],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit{

  apod: Apod = new Apod()

  model: any = {}

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.getApod()
    this.service.apod$.subscribe((data: any) => this.apod = data)
  }

  handleDateSelect(value: any){
    console.log(value);
    let dateStr = `${value.year}-${value.month}-${value.day}`
    this.service.getApod(dateStr)
    
  }

}
