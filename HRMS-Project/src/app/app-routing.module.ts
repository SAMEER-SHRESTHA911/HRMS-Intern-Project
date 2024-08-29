import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/public/guards/guards/auth.guard';
import { NotFoundComponent } from './features/public/not-found/not-found.component';
import { StaffListComponent } from './features/private/staff-registration/staff-list/staff-list.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/layout/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    canActivate : [AuthGuard],
    loadChildren: () =>
      import('./core/layout/private/private.module').then(
        (m) => m.PrivateModule
      ),
  },
  // {
  //    path: '', component: StaffListComponent ,
  // } ,
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
