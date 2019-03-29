import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTabsModule, MatDialogModule, MatRippleModule, } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatRippleModule
  ]
})
export class MaterialModule { }
