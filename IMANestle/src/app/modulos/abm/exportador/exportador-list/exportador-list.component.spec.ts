import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportadorListComponent } from './exportador-list.component';

describe('ExportadorListComponent', () => {
  let component: ExportadorListComponent;
  let fixture: ComponentFixture<ExportadorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportadorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
