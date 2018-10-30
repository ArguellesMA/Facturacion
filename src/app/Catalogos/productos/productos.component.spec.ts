import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Productos } from './productos.component';

describe('Productos', () => {
  let component: Productos;
  let fixture: ComponentFixture<Productos>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Productos ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Productos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
