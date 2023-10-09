import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSubRedesignComponent } from './car-sub-redesign.component';

describe('CarSubRedesignComponent', () => {
  let component: CarSubRedesignComponent;
  let fixture: ComponentFixture<CarSubRedesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSubRedesignComponent]
    });
    fixture = TestBed.createComponent(CarSubRedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
