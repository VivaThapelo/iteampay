import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbozonComponent } from './jumbozon.component';

describe('JumbozonComponent', () => {
  let component: JumbozonComponent;
  let fixture: ComponentFixture<JumbozonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbozonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbozonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
