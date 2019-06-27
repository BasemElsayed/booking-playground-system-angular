import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPlaygroundComponent } from './book-playground.component';

describe('BookPlaygroundComponent', () => {
  let component: BookPlaygroundComponent;
  let fixture: ComponentFixture<BookPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
