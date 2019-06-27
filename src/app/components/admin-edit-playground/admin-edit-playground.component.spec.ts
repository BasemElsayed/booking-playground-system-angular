import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPlaygroundComponent } from './admin-edit-playground.component';

describe('AdminEditPlaygroundComponent', () => {
  let component: AdminEditPlaygroundComponent;
  let fixture: ComponentFixture<AdminEditPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
