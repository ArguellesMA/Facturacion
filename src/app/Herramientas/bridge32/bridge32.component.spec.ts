import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeT32 } from './bridge32.component';

describe('bridgeT32', () => {
  let component: BridgeT32;
  let fixture: ComponentFixture<BridgeT32>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgeT32 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeT32);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
