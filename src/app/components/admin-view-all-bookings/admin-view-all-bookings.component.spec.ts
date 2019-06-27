import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllBookingsComponent } from './admin-view-all-bookings.component';

describe('AdminViewAllBookingsComponent', () => {
  let component: AdminViewAllBookingsComponent;
  let fixture: ComponentFixture<AdminViewAllBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
