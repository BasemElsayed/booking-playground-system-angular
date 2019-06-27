import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveBookingsComponent } from './approve-bookings.component';

describe('ApproveBookingsComponent', () => {
  let component: ApproveBookingsComponent;
  let fixture: ComponentFixture<ApproveBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
