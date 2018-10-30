import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buzon } from './buzon.component';

describe('Buzon', () => {
  let component: Buzon;
  let fixture: ComponentFixture<Buzon>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buzon ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buzon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
