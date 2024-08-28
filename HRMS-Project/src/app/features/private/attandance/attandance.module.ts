import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../../../materials/materials.module';
import { AttandanceDetailsComponent } from './attandance-details/attandance-details.component';
import { AttandanceCalanderComponent } from './attandance-calander/attandance-calander.component';
import { AttandanceRoutingModule } from './attandance-routing.module';

@NgModule({
  declarations: [AttandanceDetailsComponent, AttandanceCalanderComponent],
  imports: [CommonModule, MaterialsModule, AttandanceRoutingModule],
  exports: [AttandanceDetailsComponent, AttandanceCalanderComponent],
})
export class AttandanceModule {}
