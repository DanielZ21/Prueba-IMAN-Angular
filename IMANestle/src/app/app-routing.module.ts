import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from 'src/data/route/internal.routes';
import { AuthGuard } from './core/guards/auth.guard';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { IngresoegresoComponent } from './modulos/porteria/ingresoegreso/ingresoegreso.component';
import { PorteriaVillaNuevaComponent } from './modulos/porteria/porteria-villa-nueva/porteria-villa-nueva.component';
import { PorteriaComponent } from './modulos/porteria/porteria/porteria.component';

const routes: Routes = [
  {
    path: INTERNAL_PATHS.AUTH_DEFAULT,
    loadChildren: () => import('./modulos/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: INTERNAL_PATHS.PORTERIANESTLE_DEFAULT,
    component: SkeletonComponent,
    loadChildren: () => import('./modulos/porteria/porteria.module').then((m) => m.PorteriaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
