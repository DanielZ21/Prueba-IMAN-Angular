import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { AtaAbmComponent } from './ata-abm/ata-abm.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TipoArticuloAbmComponent } from './tipo-articulo-abm/tipo-articulo-abm.component';


@NgModule({
  declarations: [
    AtaAbmComponent,
    TipoArticuloAbmComponent
  ],
  imports: [
    CommonModule,
    AbmRoutingModule,
    MaterialModule
  ],
  exports: [
    AtaAbmComponent,
    TipoArticuloAbmComponent
  ]
    
  
})
export class AbmModule { }
