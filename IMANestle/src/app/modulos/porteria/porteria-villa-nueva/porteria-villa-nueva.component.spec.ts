import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteriaVillaNuevaComponent } from './porteria-villa-nueva.component';

describe('PorteriaVillaNuevaComponent', () => {
  let component: PorteriaVillaNuevaComponent;
  let fixture: ComponentFixture<PorteriaVillaNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteriaVillaNuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteriaVillaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
