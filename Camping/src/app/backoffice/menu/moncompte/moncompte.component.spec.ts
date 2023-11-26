import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoncompteComponent } from './moncompte.component';

describe('MoncompteComponent', () => {
  let component: MoncompteComponent;
  let fixture: ComponentFixture<MoncompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoncompteComponent]
    });
    fixture = TestBed.createComponent(MoncompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
