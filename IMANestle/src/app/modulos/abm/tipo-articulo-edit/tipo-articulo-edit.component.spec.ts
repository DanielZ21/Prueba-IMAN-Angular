import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoArticuloEditComponent } from './tipo-articulo-edit.component';

describe('TipoArticuloEditComponent', () => {
  let component: TipoArticuloEditComponent;
  let fixture: ComponentFixture<TipoArticuloEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoArticuloEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoArticuloEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
