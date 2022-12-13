import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsErrorsComponent } from './validators-errors.component';

describe('ValidatorsErrorsComponent', () => {
  let component: ValidatorsErrorsComponent;
  let fixture: ComponentFixture<ValidatorsErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorsErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatorsErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
