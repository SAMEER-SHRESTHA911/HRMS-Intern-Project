import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttandanceDetailsComponent } from './attandance-details/attandance-details.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'attandance-details',
    component: AttandanceDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class AttandanceRoutingModule {}
