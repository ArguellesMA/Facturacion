import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetasPersonalizadas } from './etiquetas.component';

describe('EtiquetasPersonalizadas', () => {
  let component: EtiquetasPersonalizadas;
  let fixture: ComponentFixture<EtiquetasPersonalizadas>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiquetasPersonalizadas ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquetasPersonalizadas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
