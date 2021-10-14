import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitoCreateComponent } from './remito-create.component';

describe('RemitoCreateComponent', () => {
  let component: RemitoCreateComponent;
  let fixture: ComponentFixture<RemitoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
