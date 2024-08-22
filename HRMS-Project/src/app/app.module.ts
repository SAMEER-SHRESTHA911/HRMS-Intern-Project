import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { DialogComponent } from './shared/components/dialog/dialog.component';import { AuthService } from './features/public/services/services/auth.service';
import { AuthGuard } from './features/public/guards/guards/auth.guard';


@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [provideAnimationsAsync(), provideHttpClient(),AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
