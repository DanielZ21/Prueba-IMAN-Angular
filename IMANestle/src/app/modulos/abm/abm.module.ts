import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { AtaAbmComponent } from './ata-abm/ata-abm.component';


@NgModule({
  declarations: [
    AtaAbmComponent
  ],
  imports: [
    CommonModule,
    AbmRoutingModule
  ],
  exports: [
    AtaAbmComponent

  ]
    
  
})
export class AbmModule { }
