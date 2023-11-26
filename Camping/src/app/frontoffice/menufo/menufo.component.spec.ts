import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufoComponent } from './menufo.component';

describe('MenufoComponent', () => {
  let component: MenufoComponent;
  let fixture: ComponentFixture<MenufoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenufoComponent]
    });
    fixture = TestBed.createComponent(MenufoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
