import { Component } from '@angular/core';
import { Pais } from '../../models/interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  paisABuscar = '';

  get listaPaisesEncontrados(): Pais[] {
    return this.paisService.listaPaisesEncontrados;
  }
  // set listaPaisesEncontrados(listaPaises: Pais[]) {
  //   this.listaPaisesEncontrados = listaPaises;
  // }

  constructor(public paisService: PaisService) {}

  buscar(termino: string) {
    this.paisABuscar = termino;

    // vaciamos la anterior lista si la hubiera
    this.paisService.vaciarListaPaisesEncontrados();

    this.paisService.buscarPorPais(this.paisABuscar);
  }

  sugerencias(termino: string) {

    // // vaciamos la anterior lista si la hubiera
    // this.paisService.vaciarListaPaisesEncontrados();

    this.paisService.sugerencias(termino);
  }
}
