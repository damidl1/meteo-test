import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoChartComponent } from './meteo-chart.component';

describe('MeteoChartComponent', () => {
  let component: MeteoChartComponent;
  let fixture: ComponentFixture<MeteoChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteoChartComponent]
    });
    fixture = TestBed.createComponent(MeteoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
