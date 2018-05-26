import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http' 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  searchWeatherData(cityName: String): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=74dcef39330291f15d8b28225d89ba75&units=metric')
        .map(response => response.json()
      ).catch(error => {
            console.error(error);
            return Observable.throw(error.json())
        });
}

}
