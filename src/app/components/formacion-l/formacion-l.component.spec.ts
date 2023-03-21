import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionLComponent } from './formacion-l.component';

describe('FormacionLComponent', () => {
  let component: FormacionLComponent;
  let fixture: ComponentFixture<FormacionLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
