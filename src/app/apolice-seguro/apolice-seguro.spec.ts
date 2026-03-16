import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceSeguro } from './apolice-seguro';

describe('ApoliceSeguro', () => {
  let component: ApoliceSeguro;
  let fixture: ComponentFixture<ApoliceSeguro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApoliceSeguro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoliceSeguro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
