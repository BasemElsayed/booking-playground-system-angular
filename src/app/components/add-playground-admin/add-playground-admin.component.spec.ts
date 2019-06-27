import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaygroundAdminComponent } from './add-playground-admin.component';

describe('AddPlaygroundAdminComponent', () => {
  let component: AddPlaygroundAdminComponent;
  let fixture: ComponentFixture<AddPlaygroundAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaygroundAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaygroundAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
