import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosLComponent } from './proyectos-l.component';

describe('ProyectosLComponent', () => {
  let component: ProyectosLComponent;
  let fixture: ComponentFixture<ProyectosLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
