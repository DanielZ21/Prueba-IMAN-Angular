import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteriaEditComponent } from './porteria-edit.component';

describe('PorteriaEditComponent', () => {
  let component: PorteriaEditComponent;
  let fixture: ComponentFixture<PorteriaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteriaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteriaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
