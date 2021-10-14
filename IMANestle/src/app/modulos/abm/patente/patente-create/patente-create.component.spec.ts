import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatenteCreateComponent } from './patente-create.component';

describe('PatenteCreateComponent', () => {
  let component: PatenteCreateComponent;
  let fixture: ComponentFixture<PatenteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatenteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatenteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
