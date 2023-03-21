import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLComponent } from './experiencia-l.component';

describe('ExperienciaLComponent', () => {
  let component: ExperienciaLComponent;
  let fixture: ComponentFixture<ExperienciaLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
