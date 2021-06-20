import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DetallePaisComponent } from './pages/detalle-pais/detalle-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    DetallePaisComponent,
    TablaComponent,
    PaisInputComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  exports: [
    DetallePaisComponent,
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
  ], 
})
export class PaisModule { }
