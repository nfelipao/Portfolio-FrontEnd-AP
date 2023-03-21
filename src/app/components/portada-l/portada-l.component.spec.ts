import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaLComponent } from './portada-l.component';

describe('PortadaLComponent', () => {
  let component: PortadaLComponent;
  let fixture: ComponentFixture<PortadaLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
