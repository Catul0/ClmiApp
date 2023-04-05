import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-spanish',
  templateUrl: './spanish.component.html',
  styleUrls: ['./spanish.component.css']
})
export class SpanishComponent implements OnInit {

  weather:any;
  validation=false;
  validation1=false;
  wind:any;
  temp:any;
  background : string = "";
  constructor(private weatherService:WeatherService){

  }
  ngOnInit(){
    this.background="assets/image/fondo.webp";
  }
  getWeather(cityName:string, countryCode:string){
    this.validation=false;
    this.validation1=false;
    if(cityName && countryCode){
      this.weatherService.getWeather(cityName, countryCode).subscribe(
        res =>{
          console.log(res);
          this.weather = res;
          this.wind=parseInt(this.weather.wind.speed);
          this.wind*=3.6;
          this.temp=this.weather.main.temp;
          this.temp= parseInt(this.temp);
          if(this.temp>=30){
            this.background="assets/image/desierto.webp";
          }else if(this.temp>10 && this.temp<30){
            this.background="assets/image/lindo.webp";
          }else{
            this.background="assets/image/nieve.webp";
          }
        },
        err => this.validation1=true
      );
    }else{
      this.validation=true;
    }
    
  }
  submitLocation(name:any, code:any){
    this.getWeather(name.value, code.value);
    name.value='';
    code.value='';
    name.focus();
    return false;
  }
}
