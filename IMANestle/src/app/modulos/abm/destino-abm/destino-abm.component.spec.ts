import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoAbmComponent } from './destino-abm.component';

describe('DestinoAbmComponent', () => {
  let component: DestinoAbmComponent;
  let fixture: ComponentFixture<DestinoAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinoAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
