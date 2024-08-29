import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { AuthService } from './features/public/services/services/auth.service';
import { AuthGuard } from './features/public/guards/guards/auth.guard';
import { MaterialsModule } from './materials/materials.module';

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
    provideHttpClient(),
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
