import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalidadEditComponent } from './nacionalidad-edit.component';

describe('NacionalidadEditComponent', () => {
  let component: NacionalidadEditComponent;
  let fixture: ComponentFixture<NacionalidadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionalidadEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalidadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
