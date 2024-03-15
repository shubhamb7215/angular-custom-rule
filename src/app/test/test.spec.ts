import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test } from './test';

describe('Test', () => {
  let component: Test;
  let fixture: ComponentFixture<Test>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Test]
    });
    fixture = TestBed.createComponent(Test);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
