import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';
import Chart from 'chart.js/auto';
import { Forecast } from 'src/app/model/forecast';

@Component({
  selector: 'app-meteo-chart',
  templateUrl: './meteo-chart.component.html',
  styleUrls: ['./meteo-chart.component.scss'],
})
export class MeteoChartComponent implements OnInit {
  constructor(private mService: MeteoService) {}

  ngOnInit(): void {
    this.mService.getMeteoData().subscribe((data) => {
      this.initChart(data);
    });
  }

  initChart(data: Forecast[]) {
    const ctx: any = document.getElementById('myChart');

    const chart: any = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map((forecast) => forecast.time.toISOString()), // asse x
        datasets: [
          {
            label: 'precipitation probability',
            data: data.map((forecast) => forecast.precipitation),
            borderWidth: 1,
          },
          {
            label: 'humidity',
            data: data.map((forecast) => forecast.humidity),
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    chart.canvas.parentNode.style.height = '500px';
  }
}
