import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent, // This acts as the layout for the private routes
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../../features/private/private.module').then(
            (m) => m.PrivateModule
          ),
      },
    ],
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('../../../features/private/private.module').then(
  //       (m) => m.PrivateModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
