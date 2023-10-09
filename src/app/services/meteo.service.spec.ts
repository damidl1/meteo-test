import { TestBed } from '@angular/core/testing';

import { MeteoService } from './meteo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('MeteoService', () => {
  let service: MeteoService;
  let client: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MeteoService);
    client = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('forecast array should have 3 elements', () => {
    const testObj = {
      hourly_units: {
        temperature_2m: '°C',
        relativehumidity_2m: '%',
        precipitation_probability: '%',
        cloudcover: '%',
        windspeed_10m: 'km/h',
      },
      hourly: {
        time: ['2023-10-09T00:00', '2023-10-09T01:00', '2023-10-09T02:00'],
        temperature_2m: [19.5, 19.4, 18.9],
        relativehumidity_2m: [93, 94, 94],
        precipitation_probability: [0, 0, 0],
        weathercode: [2, 45, 45],
        cloudcover: [82, 62, 31],
        windspeed_10m: [2.1, 3.3, 4.5],
      },
    };
    const array = service.createForecastArray(testObj);
    expect(array.length).toEqual(3);
  });

  it('forecast array should contain forecast', () => {
    const testObj = {
      hourly_units: {
        temperature_2m: '°C',
        relativehumidity_2m: '%',
        precipitation_probability: '%',
        cloudcover: '%',
        windspeed_10m: 'km/h',
      },
      hourly: {
        time: ['2023-10-09T00:00', '2023-10-09T01:00', '2023-10-09T02:00'],
        temperature_2m: [19.5, 19.4, 18.9],
        relativehumidity_2m: [93, 94, 94],
        precipitation_probability: [0, 0, 0],
        weathercode: [2, 45, 45],
        cloudcover: [82, 62, 31],
        windspeed_10m: [2.1, 3.3, 4.5],
      },
    };

    const comparisonObj = {
      time: new Date('2023-10-09T00:00'),
      cloudCover: 82,
      windSpeed: 2.1,
      precipitation: 0,
      humidity: 93,
      temperature: 19.5,
      weatherCode: 2,
      cloudCoverUnit: '%',
      windSpeedUnit: 'km/h',
      precipitationUnit: '%',
      humidityUnit: '%',
      temperatureUnit: '°C',
    };

    const array = service.createForecastArray(testObj);
    expect(array[0]).toEqual(comparisonObj);
  });
});
