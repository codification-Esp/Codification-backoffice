import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCodificationComponent } from './gestion-codification.component';

describe('GestionCodificationComponent', () => {
  let component: GestionCodificationComponent;
  let fixture: ComponentFixture<GestionCodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
