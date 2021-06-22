import { Component } from '@angular/core';
import { Pais } from '../../models/interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  // styles: [
  //   `
  //     li {
  //       cursor: pointer;
  //     }
  //   `,
  // ],
})
export class PorPaisComponent {
  terminoABuscar = '';

  get listaPaisesEncontrados(): Pais[] {
    return this.paisService.listaPaisesEncontrados;
  }
  // set listaPaisesEncontrados(listaPaises: Pais[]) {
  //   this.listaPaisesEncontrados = listaPaises;
  // }

  mostrarSugerencias: boolean = true;

  constructor(public paisService: PaisService) {
    this.paisService.vaciarListaPaisesEncontrados();
  }

  buscar(termino: string) {
    this.mostrarSugerencias = false;

    this.terminoABuscar = termino;

    // vaciamos la anterior lista si la hubiera
    this.paisService.vaciarListaPaisesEncontrados();

    this.paisService.buscarPorPais(this.terminoABuscar);
  }

  sugerencias(termino: string) {
    this.terminoABuscar = termino;
    this.paisService.errorTerminoNoEncontrado = false;
    this.mostrarSugerencias = true;
    // // vaciamos la anterior lista si la hubiera
    // this.paisService.vaciarListaPaisesEncontrados();

    this.paisService.sugerencias(termino);
  }
}
