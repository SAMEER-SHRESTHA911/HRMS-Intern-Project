import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './features/public/services/services/auth.service';
import { MaterialsModule } from './materials/materials.module';
import { AuthGuard } from './features/public/guards/guards/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    MaterialsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    // provideHttpClient(withInterceptors([authInterceptor])),
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
