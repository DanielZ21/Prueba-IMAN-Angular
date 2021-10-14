import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitoEditComponent } from './remito-edit.component';

describe('RemitoEditComponent', () => {
  let component: RemitoEditComponent;
  let fixture: ComponentFixture<RemitoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
