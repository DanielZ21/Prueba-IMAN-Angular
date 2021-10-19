import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { AtaAbmComponent } from './ata-abm/ata-abm.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TipoArticuloAbmComponent } from './tipo-articulo-abm/tipo-articulo-abm.component';
import { ChoferAbmComponent } from './chofer-abm/chofer-abm.component';
import { DestinoAbmComponent } from './destino-abm/destino-abm.component';
import { ClienteAbmComponent } from './cliente-abm/cliente-abm.component';


@NgModule({
  declarations: [
    AtaAbmComponent,
    TipoArticuloAbmComponent,
    ChoferAbmComponent,
    DestinoAbmComponent,
    ClienteAbmComponent
  ],
  imports: [
    CommonModule,
    AbmRoutingModule,
    MaterialModule
  ],
  exports: [
    AtaAbmComponent,
    TipoArticuloAbmComponent,
    ChoferAbmComponent,
    DestinoAbmComponent,
    ClienteAbmComponent
  ]
    
  
})
export class AbmModule { }
