import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreReadingComponent } from './more-reading.component';

describe('MoreReadingComponent', () => {
  let component: MoreReadingComponent;
  let fixture: ComponentFixture<MoreReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
