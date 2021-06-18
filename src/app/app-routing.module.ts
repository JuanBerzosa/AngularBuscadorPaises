import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';

const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    // todas las demas rutas tambien tienen un '' antes del /, por eso se pone esto:
    pathMatch: 'full',
  },
  {
    path: '/pais',
    component: PorPaisComponent,
  },
  {
    path: '/region',
    component: PorRegionComponent,
  },
  {
    path: '/capital',
    component: PorCapitalComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppRoutingModule {}
