import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoTableComponent } from './meteo-table.component';
import { HttpClientModule } from '@angular/common/http';

describe('MeteoTableComponent', () => {
  let component: MeteoTableComponent;
  let fixture: ComponentFixture<MeteoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MeteoTableComponent]
    });
    fixture = TestBed.createComponent(MeteoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
