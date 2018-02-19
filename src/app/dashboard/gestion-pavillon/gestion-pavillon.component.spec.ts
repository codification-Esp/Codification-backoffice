import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPavillonComponent } from './gestion-pavillon.component';

describe('GestionPavillonComponent', () => {
  let component: GestionPavillonComponent;
  let fixture: ComponentFixture<GestionPavillonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPavillonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPavillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
