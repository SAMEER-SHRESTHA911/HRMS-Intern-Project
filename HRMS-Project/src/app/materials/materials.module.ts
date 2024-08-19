import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [CommonModule, MatGridListModule, MatButtonModule],
  exports: [MatGridListModule, MatCardModule],
})
export class MaterialsModule {}
