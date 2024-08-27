import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapanyPoliciesComponent } from './comapany-policies.component';

describe('ComapanyPoliciesComponent', () => {
  let component: ComapanyPoliciesComponent;
  let fixture: ComponentFixture<ComapanyPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComapanyPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComapanyPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
