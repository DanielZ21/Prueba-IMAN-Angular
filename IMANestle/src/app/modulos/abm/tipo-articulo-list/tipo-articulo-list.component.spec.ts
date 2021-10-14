import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoArticuloListComponent } from './tipo-articulo-list.component';

describe('TipoArticuloListComponent', () => {
  let component: TipoArticuloListComponent;
  let fixture: ComponentFixture<TipoArticuloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoArticuloListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoArticuloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
