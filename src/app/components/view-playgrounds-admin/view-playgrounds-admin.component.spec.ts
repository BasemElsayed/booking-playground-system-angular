import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaygroundsAdminComponent } from './view-playgrounds-admin.component';

describe('ViewPlaygroundsAdminComponent', () => {
  let component: ViewPlaygroundsAdminComponent;
  let fixture: ComponentFixture<ViewPlaygroundsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlaygroundsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlaygroundsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
