import { Component, OnInit } from '@angular/core';

import { Pais } from '../../models/interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  terminoBuscar = '';

  get listaPaisesEncontrados(): Pais[] {
    console.log('Acceso a listPaisesEncontrados en porPais.ts');
    return this.paisService.listaPaisesEncontrados;
  }

  constructor(public paisService: PaisService) {}

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.terminoBuscar = termino;

    // vaciamos la anterior lista si la hubiera
    this.paisService.vaciarListaPaisesEncontrados();

    this.paisService.buscarPorCapital(this.terminoBuscar);
  }

  sugerencias(termino: string) {
    // this.terminoBuscar = termino;

    // // vaciamos la anterior lista si la hubiera
    // this.paisService.vaciarListaPaisesEncontrados();

    // this.paisService.buscarPorPais(this.terminoBuscar);
    this.buscar(termino);
  }

}
