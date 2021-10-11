import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from 'src/data/route/internal.routes';
import { IngresoegresoComponent } from './ingresoegreso/ingresoegreso.component';
import { PorteriaVillaNuevaComponent } from './porteria-villa-nueva/porteria-villa-nueva.component';
import { PorteriaComponent } from './porteria/porteria.component';

const routes: Routes = [
  {
    path: INTERNAL_PATHS.PORTERIANESTLE_INGRESO_EGRESO,
    component: IngresoegresoComponent
  },
  {
    path: INTERNAL_PATHS.PORTERIANESTLE_PORTERIA,
    component: PorteriaComponent
  },
  {
    path: INTERNAL_PATHS.PORTERIANESTLE_PORTERIA_VILLA_NUEVA,
    component: PorteriaVillaNuevaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorteriaRoutingModule { }
