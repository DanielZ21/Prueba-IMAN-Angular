import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { AtaAbmComponent } from './ata-abm/ata-abm.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    AtaAbmComponent
  ],
  imports: [
    CommonModule,
    AbmRoutingModule,
    MaterialModule
  ],
  exports: [
    AtaAbmComponent

  ]
    
  
})
export class AbmModule { }
