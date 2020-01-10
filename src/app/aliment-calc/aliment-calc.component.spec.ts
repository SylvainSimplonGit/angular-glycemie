import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentCalcComponent } from './aliment-calc.component';

describe('AlimentCalcComponent', () => {
  let component: AlimentCalcComponent;
  let fixture: ComponentFixture<AlimentCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
