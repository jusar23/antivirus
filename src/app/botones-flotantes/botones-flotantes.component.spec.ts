import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesFlotantesComponent } from './botones-flotantes.component';

describe('BotonesFlotantesComponent', () => {
  let component: BotonesFlotantesComponent;
  let fixture: ComponentFixture<BotonesFlotantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesFlotantesComponent]
    });
    fixture = TestBed.createComponent(BotonesFlotantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
