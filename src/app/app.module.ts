import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoTableComponent } from './components/meteo-table/meteo-table.component';
import { MeteoChartComponent } from './components/meteo-chart/meteo-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoTableComponent,
    MeteoChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
