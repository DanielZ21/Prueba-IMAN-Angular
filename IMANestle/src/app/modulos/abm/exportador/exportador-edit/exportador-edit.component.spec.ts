import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportadorEditComponent } from './exportador-edit.component';

describe('ExportadorEditComponent', () => {
  let component: ExportadorEditComponent;
  let fixture: ComponentFixture<ExportadorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportadorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
