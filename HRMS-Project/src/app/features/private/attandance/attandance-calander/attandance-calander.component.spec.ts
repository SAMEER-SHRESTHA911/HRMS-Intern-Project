import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandanceCalanderComponent } from './attandance-calander.component';

describe('AttandanceCalanderComponent', () => {
  let component: AttandanceCalanderComponent;
  let fixture: ComponentFixture<AttandanceCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttandanceCalanderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttandanceCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
