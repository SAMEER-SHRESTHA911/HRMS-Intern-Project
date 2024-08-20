import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/layout/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./core/layout/private/private.module').then(
        (m) => m.PrivateModule
      ),
  },

  {
    path: 'aditya',
    loadChildren: () =>
      import('./core/layout/private/private.module').then(
        (m) => m.PrivateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
