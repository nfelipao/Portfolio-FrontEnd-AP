import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLComponent } from './navbar-l.component';

describe('NavbarLComponent', () => {
  let component: NavbarLComponent;
  let fixture: ComponentFixture<NavbarLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
