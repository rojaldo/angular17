import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Apod } from '../../../models/apod';
import { YouTubePlayer } from '@angular/youtube-player';
import { ApodService } from '../../../services/apod.service';

@Component({
  selector: 'app-apod-info',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './apod-info.component.html',
  styleUrl: './apod-info.component.scss'
})
export class ApodInfoComponent implements OnInit, OnChanges, OnDestroy{

  // today date
  @Input() date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

  @Input() info: Apod = new Apod()

  constructor(private service:ApodService) { 
    console.log('ApodInfoComponent Constructor')
    
  }

  ngOnInit(): void {
    console.log('ApodInfoComponent ngOnInit')
    this.service.getApod(this.date)
    this.service.apod$.subscribe(apod => this.info = apod)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ApodInfoComponent ngOnChanges')
    console.log(changes);
    // check if date has changed
    if(changes['date']){
      this.service.getApod(changes['date'].currentValue)
    }
  }
  ngOnDestroy(): void {
    console.log('ApodInfoComponent ngOnDestroy')
  }


}
