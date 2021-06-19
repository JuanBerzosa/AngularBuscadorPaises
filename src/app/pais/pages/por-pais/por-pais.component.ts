import { Component } from '@angular/core';
import { Pais } from '../../models/interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  paisABuscar = '';

  get listaPaisesEncontrados(): Pais[] {
    console.log('Acceso a listPaisesEncontrados en porPais.ts');
    return this.paisService.listaPaisesEncontrados;
  }
  // set listaPaisesEncontrados(listaPaises: Pais[]) {
  //   this.listaPaisesEncontrados = listaPaises;
  // }

  constructor(public paisService: PaisService) {}

  buscar() {
    console.log('buscar en porPias.ts', this.paisABuscar);

    // vaciamos la anterior lista si la hubiera
    this.paisService.vaciarListaPaisesEncontrados();

    this.paisService.buscarPorPais(this.paisABuscar);
  }
}
