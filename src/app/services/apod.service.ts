import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private _apod: any = {}
  apod$ = new BehaviorSubject<any>(this._apod)

  constructor(private http: HttpClient) { }

  getApod(dateStr?: string) {
    let url = 'https://api.nasa.gov/planetary/apod'
    const apiKey = 'WRONG_API_KEY'
    url = `${url}?api_key=${apiKey}`
    dateStr ? url = `${url}&date=${dateStr}` : null
    const observer = {
      next: (data: any) => {
        this._apod = data
        this.apod$.next(this._apod)
      },
      error: (error: any) => {
        console.error('Error fetching APOD', error)
      },
      complete: () => {
        console.log('APOD fetched successfully')
      }
    }
    this.http.get(url).subscribe(observer)  
  }
}
