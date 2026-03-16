import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorTemperatura } from './conversor-temperatura';

describe('ConversorTemperatura', () => {
  let component: ConversorTemperatura;
  let fixture: ComponentFixture<ConversorTemperatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorTemperatura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorTemperatura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
