import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistaEditComponent } from './transportista-edit.component';

describe('TransportistaEditComponent', () => {
  let component: TransportistaEditComponent;
  let fixture: ComponentFixture<TransportistaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportistaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportistaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
