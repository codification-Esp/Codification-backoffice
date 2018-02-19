import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPavillonComponent } from './details-pavillon.component';

describe('DetailsPavillonComponent', () => {
  let component: DetailsPavillonComponent;
  let fixture: ComponentFixture<DetailsPavillonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPavillonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPavillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
