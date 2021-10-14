import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportadorCreateComponent } from './exportador-create.component';

describe('ExportadorCreateComponent', () => {
  let component: ExportadorCreateComponent;
  let fixture: ComponentFixture<ExportadorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportadorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
