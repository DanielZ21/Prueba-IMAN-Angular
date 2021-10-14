import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaEditComponent } from './ata-edit.component';

describe('AtaEditComponent', () => {
  let component: AtaEditComponent;
  let fixture: ComponentFixture<AtaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
