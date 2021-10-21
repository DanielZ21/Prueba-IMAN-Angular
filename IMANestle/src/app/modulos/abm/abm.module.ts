import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AbmRoutingModule } from './abm-routing.module';

import { AtaAbmComponent } from './ata-abm/ata-abm.component';
import { TipoArticuloAbmComponent } from './tipo-articulo-abm/tipo-articulo-abm.component';
import { ChoferAbmComponent } from './chofer-abm/chofer-abm.component';
import { DestinoAbmComponent } from './destino-abm/destino-abm.component';
import { ClienteAbmComponent } from './cliente-abm/cliente-abm.component';
import { SharedModule } from 'src/app/shared/shared.module';



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
    SharedModule,
    ReactiveFormsModule,
    FormsModule
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
