import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { DetallePaisComponent } from './pages/detalle-pais/detalle-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    DetallePaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DetallePaisComponent,
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
  ], 
})
export class PaisModule { }
