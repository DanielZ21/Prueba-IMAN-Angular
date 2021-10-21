import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaAbmComponent } from './ata-abm.component';

describe('AtaAbmComponent', () => {
  let component: AtaAbmComponent;
  let fixture: ComponentFixture<AtaAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtaAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtaAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
