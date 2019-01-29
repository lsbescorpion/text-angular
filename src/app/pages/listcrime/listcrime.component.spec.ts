import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcrimeComponent } from './listcrime.component';

describe('ListcrimeComponent', () => {
  let component: ListcrimeComponent;
  let fixture: ComponentFixture<ListcrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
