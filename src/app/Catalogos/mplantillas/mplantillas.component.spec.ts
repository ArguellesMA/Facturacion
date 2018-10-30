import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillasPDF } from './mplantillas.component';

describe('PlantillasPDF', () => {
  let component: PlantillasPDF;
  let fixture: ComponentFixture<PlantillasPDF>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillasPDF ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillasPDF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
