import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../../features/private/private.module').then(
        (m) => m.PrivateModule
      ),
  },
  {
    path: 'navbar',
    loadChildren: () =>
      import('./navbar/navbar.module').then((m) => m.NavbarModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
