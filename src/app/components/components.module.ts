import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { OffersComponent } from './offers/offers.component';
import { MaterialModule } from './material/material.module';
import { AlertComponent } from './modals/alert/alert.component';
import { FabComponent } from './fab/fab.component';
import { AlitaComponent } from './alita/alita.component';
import { ManualComponent } from './manual/manual.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SideBarComponent,
    OffersComponent,
    AlertComponent,
    FabComponent,
    AlitaComponent,
    ManualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    SideBarComponent,
    OffersComponent,
    AlertComponent,
    FabComponent,
    AlitaComponent,
    ManualComponent
  ],
  entryComponents: [AlertComponent]
})
export class ComponentsModule { }
