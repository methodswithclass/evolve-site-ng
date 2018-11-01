import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolveButtonComponent } from './evolve-button.component';

describe('EvolveButtonComponent', () => {
  let component: EvolveButtonComponent;
  let fixture: ComponentFixture<EvolveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
