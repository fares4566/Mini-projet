import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsbfComponent } from './commentsbf.component';

describe('CommentsbfComponent', () => {
  let component: CommentsbfComponent;
  let fixture: ComponentFixture<CommentsbfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsbfComponent]
    });
    fixture = TestBed.createComponent(CommentsbfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
