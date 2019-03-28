import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { OffersComponent } from './offers/offers.component';
import { MaterialModule } from './material/material.module';
import { AlertComponent } from './modals/alert/alert.component';
import { FabComponent } from './fab/fab.component';

@NgModule({
  declarations: [
    SideBarComponent,
    OffersComponent,
    AlertComponent,
    FabComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SideBarComponent,
    OffersComponent,
    AlertComponent,
    FabComponent
  ],
  entryComponents: [AlertComponent]
})
export class ComponentsModule { }
