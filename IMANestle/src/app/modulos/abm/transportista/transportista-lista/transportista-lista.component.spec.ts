import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistaListaComponent } from './transportista-lista.component';

describe('TransportistaListaComponent', () => {
  let component: TransportistaListaComponent;
  let fixture: ComponentFixture<TransportistaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportistaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportistaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
