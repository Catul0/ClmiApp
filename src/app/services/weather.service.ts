import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string='4f1409cdf2abbf2498acab2cc33aeaa9';
  URI: string= '';
  constructor(private httpClient:HttpClient) {
    this.URI=`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
   }

   getWeather(cityName:string, countryCode:string){
    return (this.httpClient.get(`${this.URI}${cityName},${countryCode}&units=metric`));
   }



}
