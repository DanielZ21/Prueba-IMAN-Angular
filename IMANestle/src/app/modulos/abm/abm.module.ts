import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { AtaCreateComponent } from './ata-create/ata-create.component';


@NgModule({
  declarations: [
    AtaCreateComponent
  ],
  imports: [
    CommonModule,
    AbmRoutingModule
  ],
  exports: [
    AtaCreateComponent

  ]
    
  
})
export class AbmModule { }
