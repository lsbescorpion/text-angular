import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcrimeComponent } from './detailcrime.component';

describe('DetailcrimeComponent', () => {
  let component: DetailcrimeComponent;
  let fixture: ComponentFixture<DetailcrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
