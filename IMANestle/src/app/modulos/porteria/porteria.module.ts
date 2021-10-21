import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PorteriaRoutingModule } from './porteria-routing.module';
import { IngresoegresoComponent } from './ingresoegreso/ingresoegreso.component';
import { PorteriaComponent } from './porteria/porteria.component';
import { PorteriaVillaNuevaComponent } from './porteria-villa-nueva/porteria-villa-nueva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PorteriaEditComponent } from './porteria-edit/porteria-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';



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
    BrowserModule,
    SharedModule
  ],
  exports: [
    IngresoegresoComponent,
    PorteriaComponent,
    PorteriaVillaNuevaComponent,
    PorteriaRoutingModule,
  ]
})
export class PorteriaModule { }
