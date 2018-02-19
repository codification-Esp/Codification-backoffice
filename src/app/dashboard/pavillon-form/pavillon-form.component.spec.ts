import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PavillonFormComponent } from './pavillon-form.component';

describe('PavillonFormComponent', () => {
  let component: PavillonFormComponent;
  let fixture: ComponentFixture<PavillonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PavillonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PavillonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
