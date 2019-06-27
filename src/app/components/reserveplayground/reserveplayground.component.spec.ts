import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveplaygroundComponent } from './reserveplayground.component';

describe('ReserveplaygroundComponent', () => {
  let component: ReserveplaygroundComponent;
  let fixture: ComponentFixture<ReserveplaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveplaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveplaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
