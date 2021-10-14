import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitoListComponent } from './remito-list.component';

describe('RemitoListComponent', () => {
  let component: RemitoListComponent;
  let fixture: ComponentFixture<RemitoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
