import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfternavbarComponent } from './afternavbar.component';

describe('AfternavbarComponent', () => {
  let component: AfternavbarComponent;
  let fixture: ComponentFixture<AfternavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfternavbarComponent]
    });
    fixture = TestBed.createComponent(AfternavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
