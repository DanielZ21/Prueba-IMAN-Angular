import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaCreateComponent } from './ata-create.component';

describe('AtaCreateComponent', () => {
  let component: AtaCreateComponent;
  let fixture: ComponentFixture<AtaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
