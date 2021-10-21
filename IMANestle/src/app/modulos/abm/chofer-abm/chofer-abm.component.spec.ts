import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferAbmComponent } from './chofer-abm.component';

describe('ChoferAbmComponent', () => {
  let component: ChoferAbmComponent;
  let fixture: ComponentFixture<ChoferAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoferAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoferAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
