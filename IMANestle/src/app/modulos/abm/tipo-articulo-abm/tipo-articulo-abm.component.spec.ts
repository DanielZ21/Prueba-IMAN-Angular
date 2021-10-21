import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoArticuloAbmComponent } from './tipo-articulo-abm.component';

describe('TipoArticuloAbmComponent', () => {
  let component: TipoArticuloAbmComponent;
  let fixture: ComponentFixture<TipoArticuloAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoArticuloAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoArticuloAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
