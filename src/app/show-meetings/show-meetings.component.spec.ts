import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMeetingsComponent } from './show-meetings.component';

describe('ShowMeetingsComponent', () => {
  let component: ShowMeetingsComponent;
  let fixture: ComponentFixture<ShowMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
