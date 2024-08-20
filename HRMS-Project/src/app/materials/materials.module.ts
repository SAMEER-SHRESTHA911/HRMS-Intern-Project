import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter()],
  exports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
  ],
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatDialogActions,
  ],
})
export class MaterialsModule {}
