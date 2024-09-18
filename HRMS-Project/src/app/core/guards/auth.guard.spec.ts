import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { authGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/features/public/services/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AuthGuard } from 'src/app/features/public/guards/guards/auth.guard';

describe('authGuard', () => {

  let guard:AuthGuard;
  let store:MockStore;

  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  const mockAuthService = jasmine.createSpyObj("AuthService", ["isLoggedIn"]);
  const mockRouter = jasmine.createSpyObj("Router",["createUrlTree"]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule, RouterTestingModule],
      providers : [AuthService]
    });

  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
