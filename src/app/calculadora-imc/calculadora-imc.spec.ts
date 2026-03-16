import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraImc } from './calculadora-imc';

describe('CalculadoraImc', () => {
  let component: CalculadoraImc;
  let fixture: ComponentFixture<CalculadoraImc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraImc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraImc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
