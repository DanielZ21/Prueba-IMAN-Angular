import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorteriaRoutingModule } from './porteria-routing.module';
import { IngresoegresoComponent } from './ingresoegreso/ingresoegreso.component';
import { PorteriaComponent } from './porteria/porteria.component';
import { PorteriaVillaNuevaComponent } from './porteria-villa-nueva/porteria-villa-nueva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    IngresoegresoComponent,
    PorteriaComponent,
    PorteriaVillaNuevaComponent
  ],
  imports: [
    CommonModule,
    PorteriaRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    IngresoegresoComponent,
    PorteriaComponent,
    PorteriaVillaNuevaComponent

  ]
})
export class PorteriaModule { }
