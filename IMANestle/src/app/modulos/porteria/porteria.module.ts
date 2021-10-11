import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PorteriaRoutingModule } from './porteria-routing.module';
import { IngresoegresoComponent } from './ingresoegreso/ingresoegreso.component';
import { PorteriaComponent } from './porteria/porteria.component';
import { PorteriaVillaNuevaComponent } from './porteria-villa-nueva/porteria-villa-nueva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PorteriaEditComponent } from './porteria-edit/porteria-edit.component';



@NgModule({
  declarations: [
    IngresoegresoComponent,
    PorteriaComponent,
    PorteriaVillaNuevaComponent,
    PorteriaEditComponent
  ],
  imports: [
    CommonModule,
    PorteriaRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule
  ],
  exports: [
    IngresoegresoComponent,
    PorteriaComponent,
    PorteriaVillaNuevaComponent

  ]
})
export class PorteriaModule { }
