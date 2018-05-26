import { WeatherService } from './../service/weather-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, ControlContainer } from '@angular/forms';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  data: any[] = [];
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onSubmit(cityName: String) {
    console.log("City: " + cityName);
    this.weatherService.searchWeatherData(cityName)
            .subscribe( data => {
              console.log(data);
              let tempJson = {"name":data.name, "temp":data.main.temp};
              this.data.push(tempJson);
            }
    );
  }
}
