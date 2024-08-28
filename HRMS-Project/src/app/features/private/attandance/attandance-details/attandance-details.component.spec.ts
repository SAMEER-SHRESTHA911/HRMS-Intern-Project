import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandanceDetailsComponent } from './attandance-details.component';

describe('AttandanceDetailsComponent', () => {
  let component: AttandanceDetailsComponent;
  let fixture: ComponentFixture<AttandanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttandanceDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttandanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
