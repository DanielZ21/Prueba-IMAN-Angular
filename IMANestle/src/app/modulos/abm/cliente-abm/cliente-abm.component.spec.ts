import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAbmComponent } from './cliente-abm.component';

describe('ClienteAbmComponent', () => {
  let component: ClienteAbmComponent;
  let fixture: ComponentFixture<ClienteAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
