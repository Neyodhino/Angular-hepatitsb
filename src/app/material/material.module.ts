import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDialogModule,
    Material.MatButtonModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatTooltipModule,
    Material.MatTableModule,
    Material.MatProgressSpinnerModule
  ],
  exports: [
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDialogModule,
    Material.MatButtonModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatTooltipModule,
    Material.MatTableModule,
    Material.MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule { }
