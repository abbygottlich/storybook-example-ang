import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodJobComponent } from './good-job.component';

describe('GoodJobComponent', () => {
  let component: GoodJobComponent;
  let fixture: ComponentFixture<GoodJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
