import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsComponent } from './imgs.component';

describe('ImgsComponent', () => {
  let component: ImgsComponent;
  let fixture: ComponentFixture<ImgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
