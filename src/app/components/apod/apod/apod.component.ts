import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit{

  apod: any = {}

  constructor(private service: ApodService) { }
  ngOnInit(): void {
    this.service.getApod()
    this.service.apod$.subscribe((data: any) => this.apod = data)
  }

}
