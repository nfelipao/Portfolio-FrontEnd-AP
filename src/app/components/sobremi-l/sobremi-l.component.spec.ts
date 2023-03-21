import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremiLComponent } from './sobremi-l.component';

describe('SobremiLComponent', () => {
  let component: SobremiLComponent;
  let fixture: ComponentFixture<SobremiLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremiLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremiLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
