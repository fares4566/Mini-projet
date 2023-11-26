import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyposteComponent } from './myposte.component';

describe('MyposteComponent', () => {
  let component: MyposteComponent;
  let fixture: ComponentFixture<MyposteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyposteComponent]
    });
    fixture = TestBed.createComponent(MyposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
