import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { TransportistaCreateComponent } from './transportista/transportista-create/transportista-create.component';
import { TransportistaEditComponent } from './transportista/transportista-edit/transportista-edit.component';
import { TransportistaListaComponent } from './transportista/transportista-lista/transportista-lista.component';
import { AtaCreateComponent } from './ata/ata-create/ata-create.component';
import { AtaEditComponent } from './ata/ata-edit/ata-edit.component';
import { AtaListComponent } from './ata/ata-list/ata-list.component';
import { ChoferCreateComponent } from './chofer/chofer-create/chofer-create.component';
import { ChoferEditComponent } from './chofer/chofer-edit/chofer-edit.component';
import { ChoferListComponent } from './chofer/chofer-list/chofer-list.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { DestinoComponent } from './destino/destino.component';
import { ExportadorComponent } from './exportador/exportador.component';
import { NacionalidadComponent } from './nacionalidad/nacionalidad.component';
import { DestinoCreateComponent } from './destino/destino-create/destino-create.component';
import { DestinoEditComponent } from './destino/destino-edit/destino-edit.component';
import { DestinoListComponent } from './destino/destino-list/destino-list.component';
import { ExportadorCreateComponent } from './exportador/exportador-create/exportador-create.component';
import { ExportadorEditComponent } from './exportador/exportador-edit/exportador-edit.component';
import { ExportadorListComponent } from './exportador/exportador-list/exportador-list.component';
import { NacionalidadCreateComponent } from './nacionalidad/nacionalidad-create/nacionalidad-create.component';
import { NacionalidadEditComponent } from './nacionalidad/nacionalidad-edit/nacionalidad-edit.component';
import { NacionalidadListComponent } from './nacionalidad/nacionalidad-list/nacionalidad-list.component';
import { PatenteCreateComponent } from './patente/patente-create/patente-create.component';
import { PatenteEditComponent } from './patente/patente-edit/patente-edit.component';
import { PatenteListComponent } from './patente/patente-list/patente-list.component';
import { RemitoCreateComponent } from './remito/remito-create/remito-create.component';
import { RemitoEditComponent } from './remito/remito-edit/remito-edit.component';
import { RemitoListComponent } from './remito/remito-list/remito-list.component';
import { TipoArticuloCreateComponent } from './tipo-articulo-create/tipo-articulo-create.component';
import { TipoArticuloEditComponent } from './tipo-articulo-edit/tipo-articulo-edit.component';
import { TipoArticuloListComponent } from './tipo-articulo-list/tipo-articulo-list.component';


@NgModule({
  declarations: [
    TransportistaCreateComponent,
    TransportistaEditComponent,
    TransportistaListaComponent,
    AtaCreateComponent,
    AtaEditComponent,
    AtaListComponent,
    ChoferCreateComponent,
    ChoferEditComponent,
    ChoferListComponent,
    ClienteCreateComponent,
    ClienteEditComponent,
    ClienteListComponent,
    DestinoComponent,
    ExportadorComponent,
    NacionalidadComponent,
    DestinoCreateComponent,
    DestinoEditComponent,
    DestinoListComponent,
    ExportadorCreateComponent,
    ExportadorEditComponent,
    ExportadorListComponent,
    NacionalidadCreateComponent,
    NacionalidadEditComponent,
    NacionalidadListComponent,
    PatenteCreateComponent,
    PatenteEditComponent,
    PatenteListComponent,
    RemitoCreateComponent,
    RemitoEditComponent,
    RemitoListComponent,
    TipoArticuloCreateComponent,
    TipoArticuloEditComponent,
    TipoArticuloListComponent
  ],
  imports: [
    CommonModule,
    AbmRoutingModule
  ]
})
export class AbmModule { }
