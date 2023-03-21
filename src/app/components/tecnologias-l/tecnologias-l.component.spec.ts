import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasLComponent } from './tecnologias-l.component';

describe('TecnologiasLComponent', () => {
  let component: TecnologiasLComponent;
  let fixture: ComponentFixture<TecnologiasLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiasLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
