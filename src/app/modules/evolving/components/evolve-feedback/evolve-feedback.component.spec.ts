import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolveFeedbackComponent } from './evolve-feedback.component';

describe('EvolveFeedbackComponent', () => {
  let component: EvolveFeedbackComponent;
  let fixture: ComponentFixture<EvolveFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolveFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolveFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
