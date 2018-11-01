import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolvingComponent } from './evolving.component';

describe('EvolvingComponent', () => {
  let component: EvolvingComponent;
  let fixture: ComponentFixture<EvolvingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolvingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
