import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatenteEditComponent } from './patente-edit.component';

describe('PatenteEditComponent', () => {
  let component: PatenteEditComponent;
  let fixture: ComponentFixture<PatenteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatenteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatenteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
