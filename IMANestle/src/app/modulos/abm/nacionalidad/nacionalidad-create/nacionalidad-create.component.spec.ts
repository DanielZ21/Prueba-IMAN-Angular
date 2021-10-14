import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalidadCreateComponent } from './nacionalidad-create.component';

describe('NacionalidadCreateComponent', () => {
  let component: NacionalidadCreateComponent;
  let fixture: ComponentFixture<NacionalidadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionalidadCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalidadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
