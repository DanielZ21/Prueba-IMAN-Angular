import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoegresoComponent } from './ingresoegreso.component';

describe('IngresoegresoComponent', () => {
  let component: IngresoegresoComponent;
  let fixture: ComponentFixture<IngresoegresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoegresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
