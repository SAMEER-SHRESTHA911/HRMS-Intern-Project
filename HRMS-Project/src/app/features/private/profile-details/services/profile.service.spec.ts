import { TestBed } from '@angular/core/testing';
import { ProfileDetailsService } from './profile.service';


describe('ProfileDetailsService', () => {
  type NewType = ProfileDetailsService;

  let service: NewType;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
