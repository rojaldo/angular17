import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apod } from '../models/apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private _apod: Apod = new Apod()
  apod$ = new BehaviorSubject<Apod>(this._apod)

  constructor(private http: HttpClient) { }

  getApod(dateStr?: string) {
    let url = 'https://api.nasa.gov/planetary/apod'
    const apiKey = 'DEMO_KEY'
    url = `${url}?api_key=${apiKey}`
    dateStr ? url = `${url}&date=${dateStr}` : null;
    const myObserver = {
      next: (x: any) => {
        this._apod = new Apod(x)
        this.apod$.next(this._apod)
      },
      error: (err: any) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    }
    if (this._apod.date === dateStr) {
      console.log('APOD already fetched')
    }
    else {
      this.http.get(url).subscribe(myObserver)
    }
  }
}
