import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeTXT } from './bridge33.component';

describe('BridgeTXT', () => {
  let component: BridgeTXT;
  let fixture: ComponentFixture<BridgeTXT>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeTXT ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeTXT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
