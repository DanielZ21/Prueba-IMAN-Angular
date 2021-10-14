import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoArticuloCreateComponent } from './tipo-articulo-create.component';

describe('TipoArticuloCreateComponent', () => {
  let component: TipoArticuloCreateComponent;
  let fixture: ComponentFixture<TipoArticuloCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoArticuloCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoArticuloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
