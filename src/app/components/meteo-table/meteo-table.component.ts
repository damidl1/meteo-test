import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/model/forecast';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-meteo-table',
  templateUrl: './meteo-table.component.html',
  styleUrls: ['./meteo-table.component.scss']
})
export class MeteoTableComponent implements OnInit{

  forecastArray: Forecast[] = [];

  constructor(private mService: MeteoService){}

  ngOnInit(): void {
    this.mService.getMeteoData().subscribe(data => this.forecastArray = data);
  }

}
