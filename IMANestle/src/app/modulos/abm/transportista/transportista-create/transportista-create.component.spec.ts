import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistaCreateComponent } from './transportista-create.component';

describe('TransportistaCreateComponent', () => {
  let component: TransportistaCreateComponent;
  let fixture: ComponentFixture<TransportistaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportistaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportistaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
