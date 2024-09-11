import { TestBed } from '@angular/core/testing';
import { ProfileDetailsService } from './profile.service';


describe('ProfileDetiailsService', () => {
  let service: ProfileDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
